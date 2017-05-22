import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CardMissionProgress from './CardMissionProgress';

export default compose(
  graphql(gql`
    query getMissionProgress {
      me {
        _id
        username
      }
    }
  `),
  mapProps(({ data: { me } }) => ({ me })),
  pure,
)(CardMissionProgress);
