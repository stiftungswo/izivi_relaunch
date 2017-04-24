import { compose, pure, mapProps, withHandlers } from 'recompose';
import { resetPassword } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import FormResetPassword from './FormResetPassword';

export default compose(
  withApollo,
  withFormSchema({
    password: {
      type: String,
      label: 'Neues Passwort',
    },
    passwordConfirm: {
      type: String,
      label: 'Neues Passwort bestätigen',
    },
  }),
  withHandlers({
    onSubmit: ({ client, url: { query: { reset: token } } }) => ({ password: newPassword }) =>
      resetPassword({ newPassword, token }, client),
  }),
  withFormErrorHandlers,
  mapProps(({ client, ...rest }) => ({ ...rest })),
  pure,
)(FormResetPassword);
