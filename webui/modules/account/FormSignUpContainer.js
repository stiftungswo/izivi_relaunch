import { compose, pure, withProps, withHandlers } from 'recompose';
import { createUser } from 'meteor-apollo-accounts';
import SimpleSchema from 'simpl-schema';
import { withApollo } from 'react-apollo';
import handleFormErrors from '../../lib/handleFormErrors';
import FormSignUp from './FormSignUp';

export default compose(
  handleFormErrors,
  withApollo,
  withProps(() => ({
    schema: new SimpleSchema({
      username: {
        type: String,
        label: 'ZDP Nummber',
      },
      email: {
        type: String,
        label: 'E-Mail Adresse',
      },
      password: {
        type: String,
        label: 'Passwort',
      },
    }),
  })),
  withHandlers({
    onSubmit: ({ client }) => ({ username, email, password }) =>
      createUser({ username, email, password }, client),
  }),
  pure,
)(FormSignUp);
