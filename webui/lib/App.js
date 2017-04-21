import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import Header from './HeaderContainer';

export default ({ url, loggedInUser, loading, children }) => (
  <main>
    <Header pathname={url.pathname} loggedInUser={loggedInUser} />
    <Segment vertical>
      {loading && (
        <Dimmer active inverted>
          <Loader size="large" inverted>Laden</Loader>
        </Dimmer>
      ) }
      {children}
    </Segment>
  </main>
);
