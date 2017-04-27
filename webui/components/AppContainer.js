import { compose, pure, lifecycle, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import connectApollo from '../lib/connectApollo';
import App from './App';

export default compose(
  connectApollo,
  graphql(gql`
    query getCurrentUser {
      me {
       _id
       name
     }
    }
  `),
  withProps(({ data: { me, loading } }) => ({
    loggedInUser: me,
    loading,
  })),
  lifecycle({
    async componentWillReceiveProps({ loggedInUser, noRedirect, allowAnonymousAccess, loading }) {
      if (noRedirect) return;
      if (!allowAnonymousAccess && !loading && !loggedInUser) {
        Router.push('/sign-in');
      }
      if (allowAnonymousAccess && !loading && loggedInUser) {
        Router.push('/');
      }
    },
  }),
  pure,
)(App);
