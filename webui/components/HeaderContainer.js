import { compose, pure, withHandlers, mapProps } from 'recompose';
import { logout } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import Header from './Header';

export default compose(
  withApollo,
  withHandlers({
    logout: ({ client }) => async () => {
      await logout(client);
    },
  }),
  mapProps(({ client, ...rest }) => ({ ...rest })),
  pure,
)(Header);
