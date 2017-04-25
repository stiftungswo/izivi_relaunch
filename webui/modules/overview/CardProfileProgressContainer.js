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
      }
    }
  `),
  mapProps(({ data: { me: { stepsPercentageComplete = 0 } = {} } }) =>
    ({ stepsPercentageComplete })),
  pure,
)(CardProfileProgress);
