import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CardListMissions from './CardListMissions';

export const CARD_LIST_OF_MISSIONS_QUERY = gql`
  query getMissions {
    me {
      _id
      missions {
        _id
      }
    }
  }
`;

export default compose(
  graphql(CARD_LIST_OF_MISSIONS_QUERY),
  mapProps(({ children, data: { me }, loading }) => ({
    missions: me && me.missions,
    loading,
    children,
  })),
  pure,
)(CardListMissions);
