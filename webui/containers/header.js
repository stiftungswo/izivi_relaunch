import { compose, pure, withHandlers } from 'recompose';
import { logout } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import Header from '../components/Header';

const handlers = withHandlers({
  logout: ({ client }) => async () => {
    await logout(client);
    client.resetStore();
  },
});

export default compose(
  withApollo,
  handlers,
  pure,
)(Header);
