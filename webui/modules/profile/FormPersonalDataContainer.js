import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Router from 'next/router';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import { Profile } from '../../lib/common/schema/user';
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
          street
          postalNumber
          city
          birthday
          phoneMobile
          phoneWork
        }
      }
    }
  `),
  graphql(gql`
    mutation storePersonalData($profile: ProfilePersonalDataInput) {
      updateProfilePersonalData(profile: $profile) {
        _id
      }
    }
  `),
  withFormSchema({
    username: {
      type: String,
      label: 'Zivildienstnummer',
    },
    profile: {
      type: Profile,
      label: false,
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
      Router.push({
        pathname: '/profile',
        query: { step: 'bank' },
      });
    },
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormPersonalData);
