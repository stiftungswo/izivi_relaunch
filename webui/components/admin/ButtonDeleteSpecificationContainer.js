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
    onClick: ({ mutate, _id }) => () =>
      mutate({ variables: { _id } }),
  }),
  mapProps(({ _id, onClick }) => ({
    onClick,
    _id,
    iconName: 'trash',
    as: 'button',
    basic: true,
    color: 'red',
    children: 'Pflichtenheft löschen',
  })),
  pure,
)(ButtonLabelIcon);
