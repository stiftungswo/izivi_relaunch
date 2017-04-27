import { compose, pure, mapProps, withHandlers } from 'recompose';
import { changePassword, logout } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import withFormSchema from '../../lib/withFormSchema';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import FormChangePassword from './FormChangePassword';

export default compose(
  withApollo,
  withFormSchema({
    oldPassword: {
      type: String,
      label: 'Aktuelles Passwort',
    },
    newPassword: {
      type: String,
      label: 'Neues Passwort',
    },
  }),
  withHandlers({
    onSubmit: ({ client }) => ({ oldPassword, newPassword }) =>
      changePassword({ oldPassword, newPassword }, client),
    onSubmitSuccess: ({ client }) => () =>
      logout(client),
  }),
  withFormErrorHandlers,
  mapProps(({ client, ...rest }) => ({ ...rest })),
  pure,
)(FormChangePassword);
