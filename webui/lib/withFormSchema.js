import { withProps } from 'recompose';
import SimpleSchema from 'simpl-schema';

export default schemaDefinition => withProps({
  schema: new SimpleSchema(schemaDefinition),
});
