import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
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
    mutation updateUserBank($bank: UserBankInput) {
      updateUserBank(bank: $bank) {
        isStepComplete(step: BANK)
        stepsPercentageComplete
        ...bankFields
      }
    }
    ${FRAGMENT_BANK}
  `),
  withFormSchema({
    internationalAccountNumber: {
      type: String,
      optional: false,
      label: 'IBAN',
      regEx: /^CH\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{1}|CH\d{19}$/,
    },
    name: {
      type: String,
      optional: false,
      label: 'Name des Bankinstituts',
    },
  }),
  withFormModel(({ data: { me } }) => (me && me.bank) || {}),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({
        variables: {
          bank: schema.clean(dirtyInput),
        },
      }),
  }),
  withFormErrorHandlers,
  mapProps(({ mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormBank);
