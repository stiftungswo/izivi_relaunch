import { compose, branch, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormSpecificationSchema from './FormSpecificationSchema';
import FormSpecification from './FormSpecification';
import { SPECIFICATION_LIST_QUERY } from './SpecificationListContainer';

export const SPECIFICATION_FORM_QUERY = gql`
  query getSpecification($_id: ID!) {
    specification(_id: $_id) {
      _id
      name
      isActive
      governmentId
      configuredExpenseRates {
        name,
       ... on Commute {
         maxPublicTransportationCommuteMinutes
         carCostsPerKilometerCHF
       }
       ... on PocketMoney {
         costsPerDayCHF
       }
       ... on WorkingClothes {
         maxCostsTotalCHF
         costsPerDayCHF
       }
       ... on Catering {
         breakfast {
           costsPerWorkDayCHF
           costsPerFreeDayCHF
         }
         lunch {
           costsPerWorkDayCHF
           costsPerFreeDayCHF
         }
         dinner {
           costsPerWorkDayCHF
           costsPerFreeDayCHF
         }
       }
     }
    }
  }
`;

const update = compose(
  graphql(SPECIFICATION_FORM_QUERY),
  withFormModel(({ data: { specification } }) => {
    if (specification) {
      const { configuredExpenseRates, ...rest } = specification;
      const namedObjects = configuredExpenseRates.reduce((acc, cur) => {
        const newObj = {};
        newObj[cur.name] = cur;
        return {
          ...acc,
          ...newObj,
        };
      }, {});
      const mappedSpecification = {
        ...rest,
        configuredExpenseRates: {
          ...namedObjects,
        },
      };
      return { specification: mappedSpecification };
    }
    return {};
  }),
  graphql(gql`
    mutation updateSpecification($specification: SpecificationInput, $_id: ID!) {
      updateSpecification(specification: $specification, _id: $_id) {
        _id
      }
    }
  `),
  withHandlers({
    onSubmit: ({ mutate, schema, _id }) => ({ ...dirtyInput }) =>
      mutate({ variables: { ...(schema.clean(dirtyInput)), _id } }),
    onSubmitSuccess: ({ onSubmitSuccess }) => ({ data }) =>
      onSubmitSuccess(data.updateSpecification),
  }),
);

const create = compose(
  graphql(gql`
    mutation createSpecification($specification: SpecificationInput) {
      createSpecification(specification: $specification) {
        _id
      }
    }
  `, { options: { refetchQueries: [{ query: SPECIFICATION_LIST_QUERY }] } }),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({ variables: schema.clean(dirtyInput) }),
    onSubmitSuccess: ({ onSubmitSuccess }) => ({ data }) =>
      onSubmitSuccess(data.createSpecification),
  }),
);

export default compose(
  withFormSchema({
    specification: {
      type: FormSpecificationSchema,
      optional: false,
    },
  }),
  branch(({ _id }) => !!_id, update, create),
  withFormErrorHandlers,
  mapProps(({ _id, mutate, ...rest }) => ({ ...rest })),
  pure,
)(FormSpecification);
