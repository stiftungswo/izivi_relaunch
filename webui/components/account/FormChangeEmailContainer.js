import { compose, pure, mapProps, withHandlers } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { resendVerificationEmail } from 'meteor-apollo-accounts';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import FormChangeEmail from './FormChangeEmail';

export default compose(
  withApollo,
  graphql(gql`
    query getBank {
      me {
        _id
        email
        isEmailVerified
      }
    }
  `),
  graphql(gql`
    mutation updateEmail($email: String!) {
      updateEmail(email: $email) {
        _id
        email
        isEmailVerified
      }
    }
  `),
  withFormSchema({
    email: {
      type: String,
      label: 'E-Mail',
    },
  }),
  withFormModel(({ data: { me } }) => ({
    email: (me && me.email) || null,
  })),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({ variables: schema.clean(dirtyInput) }),
    resendVerification: ({ client }) => ({ email }) =>
      resendVerificationEmail({ email }, client),
  }),
  withFormErrorHandlers,
  mapProps(({
    mutate,
    client,
    data: { me: { isEmailVerified = false } = {} },
    ...rest }) =>
    ({ isEmailVerified, ...rest })),
  pure,
)(FormChangeEmail);
