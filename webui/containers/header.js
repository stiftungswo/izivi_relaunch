import { compose, pure, withHandlers } from 'recompose';
import { logout } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import Header from '../components/Header';

export default compose(
  withApollo,
  withHandlers({
    logout: ({ client }) => async () => {
      await logout(client);
    },
  }),
  pure,
)(Header);
