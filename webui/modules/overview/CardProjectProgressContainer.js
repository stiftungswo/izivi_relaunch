import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CardProjectProgress from './CardProjectProgress';

export default compose(
  graphql(gql`
    query getProjectProgress {
      me {
        _id
        username
      }
    }
  `),
  mapProps(({ data: { me } }) => {
    console.log(me);
    return {};
  }),
  pure,
)(CardProjectProgress);
