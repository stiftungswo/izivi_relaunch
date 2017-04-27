import React from 'react';
import { compose, createSink } from 'recompose';
import { withApollo } from 'react-apollo';
import { verifyEmail } from 'meteor-apollo-accounts';
import Router from 'next/router';
import { Message, Container } from 'semantic-ui-react';
import App from '../components/AppContainer';

const Verifier = compose(
  withApollo,
)(createSink(async ({ client, url: { query: { expired, verify: token } } }) => {
  if (token && !expired) {
    try {
      await verifyEmail({ token }, client);
      Router.push('/');
    } catch (e) {
      Router.push('/verify-email?expired=1');
    }
  }
}));

export default ({ ...rest }) => (
  <App {...rest} noRedirect>
    <Container>
      <Verifier {...rest} />
      {rest.url.query.expired ? (
        <Message negative>
          <Message.Header>Token expired</Message.Header>
          <p>Dieser Verifizierungstoken ist nicht mehr gültig,
          melde dich an und lass dir einen neuen zusenden</p>
        </Message>
      ) : (
        <Message>
          <Message.Header>Verifizierung...</Message.Header>
          <p>Du wirst gleich weitergeleitet...</p>
        </Message>
      )}
    </Container>
  </App>
);
