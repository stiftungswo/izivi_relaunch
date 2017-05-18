import { compose, branch, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import FormSpecificationSchema from '../../lib/common/schema/specification';
import FormSpecification from './FormSpecification';

const update = compose(
  graphql(gql`
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
  `),
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
  `),
  withHandlers({
    onSubmit: ({ mutate, schema }) => ({ ...dirtyInput }) =>
      mutate({
        variables: schema.clean(dirtyInput),
        update: (store, { data: { createSpecification } }) => {
          // this is updating the specification list query result manually if already executed
          // lists don't update automatically at the moment
          // we have to do this until apollo comes up with proper cache invalidation
          const query = gql`
            query updateListCacheIfAvailable {
              allSpecifications {
                _id
                name
                isActive
                governmentId
              }
            }
          `;
          const data = store.readQuery({ query });
          if (data) {
            data.allSpecifications.push(createSpecification);
            store.writeQuery({ query, data });
          }
        },
      }),
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
