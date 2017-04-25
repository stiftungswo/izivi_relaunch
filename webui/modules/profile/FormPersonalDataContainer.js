import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import { Profile } from '../../lib/common/schema/user';
import FormPersonalData from './FormPersonalData';

export const PERSONAL_DATA = 'PERSONAL_DATA';

const FRAGMENT_PERSONAL_DATA = gql`
  fragment personalDataFields on User {
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
    isProfileStepComplete(step: PERSONAL_DATA)
  }
`;

export default compose(
  graphql(gql`
    query getPersonalData {
      me {
        ...personalDataFields
      }
    }
    ${FRAGMENT_PERSONAL_DATA}
  `),
  graphql(gql`
    mutation storePersonalData($profile: ProfilePersonalDataInput) {
      updateProfilePersonalData(profile: $profile) {
        ...personalDataFields
      }
    }
    ${FRAGMENT_PERSONAL_DATA}
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
  withFormModel(({ data: { me: { profile = null, username = '' } } }) => ({
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
)(FormPersonalData);
