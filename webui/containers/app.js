import { compose, pure, lifecycle, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import App from '../components/App';
import connectApollo from '../lib/connectApollo';

const query = graphql(gql`
  query getCurrentUser {
    me {
     _id
     email
     roles
   }
  }
`);

const loggedIn = withProps(({ data: { me, loading } }) => ({
  loggedInUserId: me,
  loading,
}));

const redirect = lifecycle({
  componentWillReceiveProps({ loggedInUserId, allowAnonymousAccess, url }) {
    if (!allowAnonymousAccess && !loggedInUserId) {
      url.replace('/signin');
    }
    if (allowAnonymousAccess && loggedInUserId) {
      url.replace('/');
    }
  },
});

export default compose(
  connectApollo,
  query,
  loggedIn,
  redirect,
  pure,
)(App);
