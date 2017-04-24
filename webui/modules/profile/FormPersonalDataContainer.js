import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Router from 'next/router';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormPersonalData from './FormPersonalData';
import PhoneField from '../../lib/FormPhoneInput';
import DateField from '../../lib/FormDateInput';

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
      optional: true,
      uniforms: {
        disabled: true,
      },
    },
    profile: {
      type: Object,
      label: false,
    },
    'profile.firstName': {
      type: String,
      label: 'Vorname',
    },
    'profile.lastName': {
      type: String,
      label: 'Nachname',
    },
    'profile.street': {
      type: String,
      label: 'Strasse',
    },
    'profile.postalNumber': {
      type: Number,
      label: 'PLZ',
    },
    'profile.city': {
      type: String,
      label: 'Ort',
    },
    'profile.birthday': {
      type: Date,
      label: 'Geburtsdatum',
      uniforms: {
        component: DateField,
      },
    },
    'profile.phoneMobile': {
      type: String,
      label: 'Telefonnummer (Mobile)',
      uniforms: {
        component: PhoneField,
        country: 'CH',
      },
    },
    'profile.phoneWork': {
      type: String,
      label: 'Telefonnummer (Geschäft)',
      optional: true,
      uniforms: {
        component: PhoneField,
        country: 'CH',
      },
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
