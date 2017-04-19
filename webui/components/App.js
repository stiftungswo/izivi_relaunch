import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';

export default ({ url, loading, children }) => (
  <main>
    <Header pathname={url.pathname} />
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
