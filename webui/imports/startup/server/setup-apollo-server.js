import { createApolloServer } from 'meteor/apollo';
import { initAccounts } from 'meteor/nicolaslopezj:apollo-accounts';
import { loadSchema, getSchema } from 'graphql-loader';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
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

const mock = false;
if (mock) {
  addMockFunctionsToSchema({ schema });
}

createApolloServer({
  schema,
});
