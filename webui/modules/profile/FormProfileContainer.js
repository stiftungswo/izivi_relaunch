import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import { Profile } from '../../lib/common/schema/user';
import FormProfile from './FormProfile';

export const PROFILE = 'PROFILE';

const FRAGMENT_PROFILE = gql`
  fragment profileFields on User {
    _id
    username
    profile {
      firstName
      lastName
      street
      postalNumber
      city
      birthday
      phoneMobile
      phoneWork
    }
    isStepComplete(step: PROFILE)
  }
`;

export default compose(
  graphql(gql`
    query getProfile {
      me {
        ...profileFields
      }
    }
    ${FRAGMENT_PROFILE}
  `),
  graphql(gql`
    mutation updateUserProfile($profile: UpdateUserProfileInput) {
      updateUserProfile(profile: $profile) {
        ...profileFields
      }
    }
    ${FRAGMENT_PROFILE}
  `),
  withFormSchema({
    username: {
      type: String,
    },
    profile: {
      type: Profile,
      optional: false,
    },
  }),
  withFormModel(({ data: { me: { profile = null, username = '' } = {} } }) => ({
    profile,
    username,
  })),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ username, ...dirtyInput }) =>
      mutate({ variables: schema.clean(dirtyInput) }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormProfile);
