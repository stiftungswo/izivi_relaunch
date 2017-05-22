import GraphQLBridge from 'uniforms/GraphQLBridge';
import { buildASTSchema, parse } from 'graphql';
import { loadSchema, getSchema } from 'graphql-loader';
import { withProps } from 'recompose';
import Schema from './common/schema';

loadSchema({ typeDefs: Schema });
const graphqlConfiguration = getSchema();
const parsedSchema = parse(graphqlConfiguration.typeDefs);
const astSchema = buildASTSchema(parsedSchema);

export default (name, validator, additionalProps) => {
  const schema = new GraphQLBridge(astSchema.getType(name), validator, additionalProps);
  return withProps({
    schema,
  });
};
