import { createApolloServer } from 'meteor/orionsoft:apollo';
import { initAccounts } from 'meteor/nicolaslopezj:apollo-accounts';
import { loadSchema, getSchema } from 'graphql-loader';
import { makeExecutableSchema } from 'graphql-tools';
import 'paginated-graphql';
import cors from 'cors';
import typeDefs from '../../api/schema';
import resolvers from '../../api/resolvers';

const options = {};
initAccounts(options);
loadSchema({ typeDefs, resolvers });
const graphqlConfiguration = getSchema();

const info = `
=== Loaded GRAPHQL Schema:
${graphqlConfiguration.typeDefs}===`;
console.log(info); // eslint-disable-line

const schema = makeExecutableSchema(graphqlConfiguration);

createApolloServer({
  schema,
}, {
  configServer(graphQLServer) {
    graphQLServer.use(
      cors(),
    );
  },
});
