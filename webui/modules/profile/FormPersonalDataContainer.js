import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormPersonalData from './FormPersonalData';

export default compose(
  graphql(gql`
    query getPersonalData {
      me {
        _id
        username
        profile {
          firstName
          lastName
        }
      }
    }
  `),
  graphql(gql`
    mutation storePersonalData($input: ProfilePersonalDataInput) {
      updateProfilePersonalData(input: $input) {
        _id
        username
        isProfileStepComplete(step: "profile")
        profile {
          firstName
          lastName
        }
      }
    }
  `),
  withFormSchema({
    username: {
      type: String,
      label: 'Zivildienstnummer',
    },
    profile: {
      type: 'Object',
    },
    'profile.firstName': {
      type: String,
      label: 'Vorname',
    },
    'profile.lastName': {
      type: String,
      label: 'Nachname',
    },
  }),
  withFormModel(({ data: { me: { profile, username } = {} } }) => ({
    profile,
    username,
  })),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ username, ...dirtyInput }) =>
      mutate({ variables: schema.clean(dirtyInput) }),
    onSubmitSuccess: () => () => {
      alert('Erfolgreich gespeichert');
    },
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormPersonalData);
