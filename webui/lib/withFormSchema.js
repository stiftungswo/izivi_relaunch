import { withProps } from 'recompose';
import SimpleSchema from 'simpl-schema';

export default (schemaDefinition) => {
  const schema = new SimpleSchema(schemaDefinition);
  return withProps({
    schema,
  });
};
