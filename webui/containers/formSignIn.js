import { compose, pure, withProps, withHandlers } from 'recompose';
import { loginWithPassword } from 'meteor-apollo-accounts';
import SimpleSchema from 'simpl-schema';
import { withApollo } from 'react-apollo';
import handleFormErrors from '../lib/handleFormErrors';
import FormSignIn from '../components/FormSignIn';

const schema = withProps(() => ({
  schema: new SimpleSchema({
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  }),
}));

const handlers = withHandlers({
  onSubmit: ({ client }) => ({ email, password }) =>
    loginWithPassword({ email, password }, client),
  onSubmitSuccess: ({ updateServerError, client }) => () => {
    client.resetStore();
    updateServerError(null);
  },
});

export default compose(
  handleFormErrors,
  withApollo,
  schema,
  handlers,
  pure,
)(FormSignIn);
