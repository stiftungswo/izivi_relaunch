import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SpecificationList from './SpecificationList';

export default compose(
  graphql(gql`
    query getAllSpecifications {
      allSpecifications {
        _id
        name
        isActive
        governmentId
      }
    }
  `),
  mapProps(({ data: { allSpecifications } }) => ({ specifications: allSpecifications })),
  pure,
)(SpecificationList);
