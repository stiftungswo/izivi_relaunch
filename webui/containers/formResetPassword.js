import { compose, pure, withProps, withHandlers } from 'recompose';
import { resetPassword } from 'meteor-apollo-accounts';
import SimpleSchema from 'simpl-schema';
import { withApollo } from 'react-apollo';
import handleFormErrors from '../lib/handleFormErrors';
import FormResetPassword from '../components/FormResetPassword';

export default compose(
  handleFormErrors,
  withApollo,
  withProps(() => ({
    schema: new SimpleSchema({
      password: {
        type: String,
        label: 'Neues Passwort',
      },
      passwordConfirm: {
        type: String,
        label: 'Neues Passwort bestätigen',
      },
    }),
  })),
  withHandlers({
    onSubmit: ({ client, url: { query: { reset: token } } }) => ({ password: newPassword }) =>
      resetPassword({ newPassword, token }, client),
  }),
  pure,
)(FormResetPassword);
