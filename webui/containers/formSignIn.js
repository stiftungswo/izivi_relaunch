import { compose, pure, withProps, withHandlers, withState } from 'recompose';
import { loginWithPassword } from 'meteor-apollo-accounts';
import SimpleSchema from 'simpl-schema';
import { withApollo } from 'react-apollo';
import handleFormErrors from '../lib/handleFormErrors';
import FormSignIn from '../components/FormSignIn';

export default compose(
  handleFormErrors,
  withApollo,
  withState('loginType', 'updateLoginType', 'email'),
  withProps(() => ({
    schema: new SimpleSchema({
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
  })),
  withHandlers({
    onSubmit: ({ client }) => ({ email, username, password }) =>
      loginWithPassword({ email, username, password }, client),
    changeLoginType: ({ updateLoginType }) => (event, { name }) => {
      updateLoginType(name);
    },
  }),
  pure,
)(FormSignIn);
