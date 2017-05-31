// import { createApolloServer } from 'meteor/orionsoft:apollo';
import { initAccounts } from 'meteor/nicolaslopezj:apollo-accounts';
import { createApolloServer } from 'meteor/apollo';
import { loadSchema, getSchema } from 'graphql-loader';
import { makeExecutableSchema } from 'graphql-tools';
import OpticsAgent from 'optics-agent';
import 'paginated-graphql';
import cors from 'cors';
import multer from 'multer';
import graphqlServerExpressUpload from './uploadMiddleware';
import typeDefs from '../../api/schema';
import resolvers from '../../api/resolvers';

const options = {};
initAccounts(options);
loadSchema({ typeDefs, resolvers });
const graphqlConfiguration = getSchema();

// print the whole schema (merged) when server is started
console.log(graphqlConfiguration.typeDefs); // eslint-disable-line
const schema = makeExecutableSchema(graphqlConfiguration);
OpticsAgent.configureAgent();
OpticsAgent.instrumentSchema(schema);

createApolloServer(req => ({
  schema,
  context: {
    opticsContext: OpticsAgent.context(req),
  },
}), {
  configServer(graphQLServer) {
    // add some more express middlewares before graphQL picks up the request
    // especially multer and graphqlServerExpressUpload allow for multipart formdata along the query
    // and therefore can take arbitrary binaries (uploading files through graphql)
    graphQLServer.use(
      OpticsAgent.middleware(),
      cors({ credentials: true }),
      multer({ inMemory: true }).any(),
      graphqlServerExpressUpload(),
    );
  },
});
