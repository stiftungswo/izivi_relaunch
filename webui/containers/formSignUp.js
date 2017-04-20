import { compose, pure, withProps, withHandlers } from 'recompose';
import { createUser } from 'meteor-apollo-accounts';
import SimpleSchema from 'simpl-schema';
import { withApollo } from 'react-apollo';
import handleFormErrors from '../lib/handleFormErrors';
import FormSignUp from '../components/FormSignUp';

const schema = withProps(() => ({
  schema: new SimpleSchema({
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    passwordConfirm: {
      type: String,
    },
  }),
}));

const handlers = withHandlers({
  onSubmit: ({ client }) => ({ email, password }) =>
    createUser({ email, password }, client),
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
)(FormSignUp);
