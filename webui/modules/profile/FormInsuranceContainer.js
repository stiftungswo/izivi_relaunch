import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import { Insurance } from '../../lib/common/schema/user';
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
    mutation updateUserInsurance($insurance: UpdateUserInsuranceInput) {
      updateUserInsurance(insurance: $insurance) {
        isStepComplete(step: INSURANCE)
        stepsPercentageComplete
        ...insuranceFields
      }
    }
    ${FRAGMENT_INSURANCE}
  `),
  withFormSchema({
    insurance: {
      type: Insurance,
      optional: false,
    },
  }),
  withFormModel(({ data: { me } }) => ({
    insurance: (me && me.insurance) || null,
  })),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({ variables: schema.clean(dirtyInput) }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormInsurance);
