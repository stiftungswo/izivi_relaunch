import { compose, pure, mapProps, withHandlers } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ButtonLabelIcon from '../ButtonLabelIcon';
import { SPECIFICATION_LIST_QUERY } from './SpecificationListContainer';

export default compose(
  graphql(gql`
    mutation deleteSpecification($_id: ID!) {
      deleteSpecification(_id: $_id) {
        _id
      }
    }`, { options: { refetchQueries: [{ query: SPECIFICATION_LIST_QUERY }] } }),
  withHandlers({
    onClick: ({ onSuccess, mutate, _id }) => async () => {
      await mutate({ variables: { _id } });
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
