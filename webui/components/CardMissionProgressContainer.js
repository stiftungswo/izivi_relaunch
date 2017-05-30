import { compose, pure, mapProps, withProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CardMissionProgress from './CardMissionProgress';

export default compose(
  withProps({
    to: new Date().getTime(),
  }),
  graphql(gql`
    query mission($_id: ID!, $to: Date) {
      mission(_id: $_id) {
        _id
        start
        end
        holidayBalance
        status
        total: serviceDays
        progress: serviceDays(to: $to)
        specification {
          _id
          name
        }
      }
    }
  `),
  mapProps(({ data: { mission } }) => mission || { specification: {} }),
  pure,
)(CardMissionProgress);
