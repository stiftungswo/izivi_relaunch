import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ButtonLabelIcon from '../ButtonLabelIcon';

export default compose(
  graphql(gql`
    mutation deleteMission($_id: ID!) {
      deleteMission(_id: $_id) {
        _id
      }
    }
  `),
  withHandlers({
    onClick: ({ onSuccess, mutate, _id }) => async () => {
      await mutate({
        variables: { _id },
        update: (store, { data: { deleteMission } }) => {
          // this is updating the mission list query result manually if already executed
          // lists don't update automatically at the moment
          // we have to do this until apollo comes up with proper cache invalidation
          const query = gql`
            query updateListCacheIfAvailable {
              allMissions {
                _id
                specification {
                  _id
                  name
                }
                user {
                  _id
                }
              }
            }
          `;
          const data = store.readQuery({ query });
          const index = data.allMissions.map(
            ({ _id: id }) => id).indexOf(deleteMission._id,
          );
          data.allMissions.splice(index, 1);
          store.writeQuery({ query, data });
        },
      });
      onSuccess();
    },
  }),
  mapProps(({ onClick }) => ({
    onClick,
    iconName: 'trash',
    as: 'button',
    basic: true,
    color: 'red',
    children: 'Einsatz löschen',
  })),
  pure,
)(ButtonLabelIcon);
