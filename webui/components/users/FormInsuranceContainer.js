import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormInsurance from './FormInsurance';

export const INSURANCE = 'INSURANCE';

const FRAGMENT_INSURANCE = gql`
  fragment insuranceFields on User {
    _id
    insurance {
      healthInsuranceName
      healthInsuranceNumber
      socialSecurityNumber
    }
  }
`;

export default compose(
  graphql(gql`
    query getInsurance {
      me {
        ...insuranceFields
      }
    }
    ${FRAGMENT_INSURANCE}
  `),
  graphql(gql`
    mutation updateUserInsurance($insurance: UserInsuranceInput) {
      updateUserInsurance(insurance: $insurance) {
        isStepComplete(step: INSURANCE)
        stepsPercentageComplete
        ...insuranceFields
      }
    }
    ${FRAGMENT_INSURANCE}
  `),
  withFormSchema({
    healthInsuranceName: {
      type: String,
      optional: false,
      label: 'Name der Krankenkasse',
    },
    healthInsuranceNumber: {
      type: Number,
      optional: false,
      label: 'Kennnummer des Trägers (BAG)',
    },
    socialSecurityNumber: {
      type: String,
      optional: false,
      label: 'Persönliche Kennnummer (AHV)',
      regEx: /^756.\d{4}.\d{4}.\d{2}$/,
    },
  }),
  withFormModel(({ data: { me } }) => (me && me.insurance) || {}),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({
        variables: {
          insurance: schema.clean(dirtyInput),
        },
      }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormInsurance);
