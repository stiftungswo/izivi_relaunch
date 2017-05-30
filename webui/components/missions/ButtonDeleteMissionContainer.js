import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ButtonLabelIcon from '../ButtonLabelIcon';
import { CARD_LIST_OF_MISSIONS_QUERY } from '../CardListContainer';

export default compose(
  graphql(gql`
    mutation deleteMission($_id: ID!) {
      deleteMission(_id: $_id) {
        _id
      }
    }
  `, {
    options: {
      refetchQueries: [{ query: CARD_LIST_OF_MISSIONS_QUERY }],
    },
  }),
  withHandlers({
    onClick: ({ onSuccess, mutate, _id }) => async () => {
      await mutate({
        variables: { _id },
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
