import { compose, pure, mapProps, withProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CardListMissions from './CardListMissions';

export const CARD_LIST_OF_MISSIONS_QUERY = gql`
  query getMissions($to: Date) {
    me {
      _id
      missions {
        _id
        start
        end
        holidayBalance
        total: serviceDays
        progress: serviceDays(to: $to)
        specification {
          name
        }
      }
    }
  }
`;

export default compose(
  withProps({
    to: new Date().getTime(),
  }),
  graphql(CARD_LIST_OF_MISSIONS_QUERY),
  mapProps(({ children, data: { me }, loading }) => ({
    missions: me && me.missions,
    loading,
    children,
  })),
  pure,
)(CardListMissions);
