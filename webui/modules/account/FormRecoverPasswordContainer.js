import { compose, pure, withProps, withHandlers } from 'recompose';
import { forgotPassword } from 'meteor-apollo-accounts';
import SimpleSchema from 'simpl-schema';
import { withApollo } from 'react-apollo';
import handleFormErrors from '../../lib/handleFormErrors';
import FormRecoverPassword from './FormRecoverPassword';

export default compose(
  handleFormErrors,
  withApollo,
  withProps(() => ({
    schema: new SimpleSchema({
      email: {
        type: String,
        label: 'E-Mail Adresse',
      },
    }),
  })),
  withHandlers({
    onSubmit: ({ client }) => ({ email }) =>
      forgotPassword({ email }, client),
  }),
  pure,
)(FormRecoverPassword);
