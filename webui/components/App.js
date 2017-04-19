import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';
import LoginForms from './LoginForms';

export default ({ url, data: { loading, me }, children }) => (
  <main>
    <Header pathname={url.pathname} />
    <Segment vertical>
      {loading && (
        <Dimmer active inverted>
          <Loader size="large" inverted>Laden</Loader>
        </Dimmer>
      ) }
      {me ? children : <LoginForms /> }
    </Segment>
  </main>
);
