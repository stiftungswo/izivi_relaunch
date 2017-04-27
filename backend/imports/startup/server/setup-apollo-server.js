import { createApolloServer } from 'meteor/orionsoft:apollo';
import { initAccounts } from 'meteor/nicolaslopezj:apollo-accounts';
import { loadSchema, getSchema } from 'graphql-loader';
import { makeExecutableSchema } from 'graphql-tools';
import 'paginated-graphql';
import cors from 'cors';
import multer from 'multer';
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

function graphqlServerExpressUpload() {
  return function uploadMiddleware(req, res, next) {
    if (!(req.method === 'POST' && req.is('multipart/form-data'))) {
      return next();
    }
    const files = req.files;
    const body = req.body;
    const variables = JSON.parse(body.variables);
    files.forEach((file) => {
      const name = file.fieldname;
      const mappedFile = {
        name: file.originalname,
        type: file.mimetype,
        size: file.size,
        buffer: file.buffer,
      };
      if (!variables[name]) {
        variables[name] = mappedFile;
      } else if (variables[name].constructor === Array) {
        variables[name].push(mappedFile);
      } else {
        variables[name] = [variables[name], mappedFile];
      }
    });
    req.body = {
      operationName: body.operationName,
      query: body.query,
      variables,
    };
    return next();
  };
}

createApolloServer({
  schema,
}, {
  configServer(graphQLServer) {
    graphQLServer.use(
      cors(),
      multer({ inMemory: true }).any(),
      graphqlServerExpressUpload(),
    );
  },
});
