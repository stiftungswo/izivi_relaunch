import { compose, pure, lifecycle, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import App from '../components/App';
import connectApollo from '../lib/connectApollo';

export default compose(
  connectApollo,
  graphql(gql`
    query getCurrentUser {
      me {
       _id
       email
       roles
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
        url.replace('/signin');
      }
      if (allowAnonymousAccess && !loading && loggedInUser) {
        url.replace('/');
      }
    },
  }),
  pure,
)(App);
