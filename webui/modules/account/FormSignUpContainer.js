import { compose, pure, mapProps, withHandlers } from 'recompose';
import { createUser } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import withFormSchema from '../../lib/withFormSchema';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import FormSignUp from './FormSignUp';

export default compose(
  withApollo,
  withFormSchema({
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
  withHandlers({
    onSubmit: ({ client }) => ({ username, email, password }) =>
      createUser({ username, email, password }, client),
  }),
  withFormErrorHandlers,
  mapProps(({ client, ...rest }) => ({ ...rest })),
  pure,
)(FormSignUp);
