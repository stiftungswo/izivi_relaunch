import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SpecificationList from './SpecificationList';

export const SPECIFICATION_LIST_QUERY = gql`
  query getAllSpecifications {
    allSpecifications {
      _id
      name
      isActive
      governmentId
    }
  }
`;

export default compose(
  graphql(SPECIFICATION_LIST_QUERY),
  mapProps(({ data: { allSpecifications } }) => ({ specifications: allSpecifications })),
  pure,
)(SpecificationList);
