import { compose, pure, withProps, withHandlers } from 'recompose';
import SimpleSchema from 'simpl-schema';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import handleFormErrors from '../../lib/handleFormErrors';
import removeNullFromResult from '../../lib/removeNullFromResult';
import FormPersonalData from './FormPersonalData';

export default compose(
  handleFormErrors,
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
    mutation storePersonalData($model: Any) {
      submitPersonalData(model: $model) {
        createdAt
      }
    }
  `),
  withHandlers({
    onSubmit: ({ mutate, model }) => () =>
      mutate({ variables: { model } }),
  }),
  withProps(({ data: { me: { profile, ...rest } = {} } }) => ({
    model: removeNullFromResult({
      ...profile,
      ...rest,
    }),
    schema: new SimpleSchema({
      username: {
        type: String,
        label: 'Zivildienstnummer',
      },
      firstName: {
        type: String,
        label: 'Vorname',
      },
      lastName: {
        type: String,
        label: 'Nachname',
      },
    }),
  })),
  pure,
)(FormPersonalData);
