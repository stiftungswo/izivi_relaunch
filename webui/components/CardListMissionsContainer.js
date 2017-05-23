import { compose, pure, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CardListMissions from './CardListMissions';

export default compose(
  graphql(gql`
    query getMissions {
      me {
        _id
        missions {
          _id
        }
      }
    }
  `),
  mapProps(({ children, data: { me }, loading }) => ({
    missions: me && me.missions,
    loading,
    children,
  })),
  pure,
)(CardListMissions);
