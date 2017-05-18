import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ButtonLabelIcon from '../ButtonLabelIcon';

export default compose(
  graphql(gql`
    mutation deleteSpecification($_id: ID!) {
      deleteSpecification(_id: $_id) {
        _id
      }
    }
  `),
  withHandlers({
    onClick: ({ onSuccess, mutate, _id }) => async () => {
      await mutate({
        variables: { _id },
        update: (store, { data: { deleteSpecification } }) => {
          // this is updating the specification list query result manually if already executed
          // lists don't update automatically at the moment
          // we have to do this until apollo comes up with proper cache invalidation
          const query = gql`
            query updateListCacheIfAvailable {
              allSpecifications {
                _id
                name
                isActive
                governmentId
              }
            }
          `;
          const data = store.readQuery({ query });
          const index = data.allSpecifications.map(
            ({ _id: id }) => id).indexOf(deleteSpecification._id,
          );
          data.allSpecifications.splice(index, 1);
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
    children: 'Pflichtenheft löschen',
  })),
  pure,
)(ButtonLabelIcon);
