import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from '../../api/schema';
import resolvers from '../../api/resolvers';

const info = `
=== Loaded GRAPHQL Schema:
${typeDefs}===`;
console.log(info); // eslint-disable-line

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const mock = false;
if (mock) {
  addMockFunctionsToSchema({ schema });
}

createApolloServer({
  schema,
});
