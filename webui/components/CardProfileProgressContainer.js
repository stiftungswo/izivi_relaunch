import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CardProfileProgress from './CardProfileProgress';

export default compose(
  graphql(gql`
    query getProfileProgress {
      me {
        _id
        stepsPercentageComplete
        avatar {
          url
        }
      }
    }
  `),
  mapProps(({ data: { me } }) =>
    ({
      avatarUrl: (me && me.avatar && me.avatar.url) || '/static/square-image.png',
      stepsPercentageComplete: (me && me.stepsPercentageComplete) || 0 })),
  pure,
)(CardProfileProgress);
