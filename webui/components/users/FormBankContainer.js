import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import { Bank } from '../../lib/common/schema/user';
import FormBank from './FormBank';

export const BANK = 'BANK';

const FRAGMENT_BANK = gql`
  fragment bankFields on User {
    _id
    bank {
      internationalAccountNumber
      name
    }
  }
`;

export default compose(
  graphql(gql`
    query getBank {
      me {
        ...bankFields
      }
    }
    ${FRAGMENT_BANK}
  `),
  graphql(gql`
    mutation updateUserBank($bank: UpdateUserBankInput) {
      updateUserBank(bank: $bank) {
        isStepComplete(step: BANK)
        stepsPercentageComplete
        ...bankFields
      }
    }
    ${FRAGMENT_BANK}
  `),
  withFormSchema({
    bank: {
      type: Bank,
      optional: false,
    },
  }),
  withFormModel(({ data: { me } }) => ({
    bank: (me && me.bank) || null,
  })),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({ variables: schema.clean(dirtyInput) }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormBank);
