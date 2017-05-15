import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SpecificationList from './SpecificationList';

export default compose(
  graphql(gql`
    query getSpecifications {
      allSpecifications {
        _id
        name
        isActive
        governmentId
        configuredExpenseRates {
          key
          name
        }
      }
    }
  `),
  mapProps(({ data: { allSpecifications } }) => ({ specifications: allSpecifications })),
  pure,
)(SpecificationList);
