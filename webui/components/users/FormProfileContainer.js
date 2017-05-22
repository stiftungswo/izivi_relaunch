import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
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
    mutation updateUserProfile($profile: UserProfileInput) {
      updateUserProfile(profile: $profile) {
        name
        isStepComplete(step: PROFILE)
        stepsPercentageComplete
        ...profileFields
      }
    }
    ${FRAGMENT_PROFILE}
  `),
  withFormSchema({
    username: {
      type: String,
    },
    firstName: {
      type: String,
      optional: false,
      label: 'Vorname',
    },
    lastName: {
      type: String,
      optional: false,
      label: 'Nachname',
    },
    street: {
      type: String,
      optional: false,
      label: 'Strasse',
    },
    city: {
      type: String,
      optional: false,
      label: 'Ort',
    },
    postalNumber: {
      type: Number,
      min: 1000,
      max: 99999,
      optional: false,
      label: 'PLZ',
    },
    birthday: {
      type: Date,
      optional: false,
      label: 'Geburtsdatum',
    },
    phoneMobile: {
      type: String,
      optional: true,
      label: 'Telefonnummer (Mobile)',
    },
    phoneWork: {
      type: String,
      optional: true,
      label: 'Telefonnummer (Arbeit)',
    },
  }),
  withFormModel(({ data: { me } }) => (me && {
    username: me.username, ...me.profile,
  }) || {}),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ username, ...dirtyInput }) =>
      mutate({
        variables: {
          profile: schema.clean(dirtyInput),
        },
      }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, data: { me }, ...rest }) => ({
    username: me && me.username,
    ...rest,
  })),
  pure,
)(FormProfile);
