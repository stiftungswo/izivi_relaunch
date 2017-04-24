import { compose, pure, mapProps, withHandlers, withState } from 'recompose';
import { loginWithPassword } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import withFormSchema from '../../lib/withFormSchema';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import FormSignIn from './FormSignIn';

export default compose(
  withApollo,
  withState('loginType', 'updateLoginType', 'email'),
  withFormSchema({
    email: {
      type: String,
      optional: true,
      label: 'E-Mail Adresse',
    },
    username: {
      type: String,
      optional: true,
      label: 'Zivildienstnummer',
    },
    password: {
      type: String,
      label: 'Passwort',
    },
  }),
  withHandlers({
    onSubmit: ({ client }) => ({ email, username, password }) =>
      loginWithPassword({ email, username, password }, client),
    changeLoginType: ({ updateLoginType }) => (event, { name }) => {
      updateLoginType(name);
    },
  }),
  withFormErrorHandlers,
  mapProps(({ updateLoginType, client, ...rest }) => ({ ...rest })),
  pure,
)(FormSignIn);
