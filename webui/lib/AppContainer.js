import { compose, pure, lifecycle, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import connectApollo from './connectApollo';
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
    async componentWillReceiveProps({ loggedInUser, allowAnonymousAccess, url, loading }) {
      if (!allowAnonymousAccess && !loading && !loggedInUser) {
        url.replace('/sign-in');
      }
      if (allowAnonymousAccess && !loading && loggedInUser) {
        url.replace('/');
      }
    },
  }),
  pure,
)(App);
