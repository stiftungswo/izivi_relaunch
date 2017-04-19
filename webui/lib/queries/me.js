import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default graphql(gql`
  query myself {
    me {
      email
    }
  }
`);
