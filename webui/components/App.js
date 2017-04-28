import React from 'react';
import Head from 'next/head';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import Header from './HeaderContainer';

export default ({ url, loggedInUser, loading, children }) => (
  <main>
    <Head>
      <link rel="stylesheet" href="/static/semantic-ui-css/semantic.min.css" />
    </Head>
    <Header
      loading={loading}
      pathname={url.pathname}
      loggedInUser={loggedInUser}
    />
    <Segment vertical padded>
      {loading && (
        <Dimmer active inverted>
          <Loader size="large" inverted>Laden</Loader>
        </Dimmer>
      ) }
      {children}
    </Segment>
  </main>
);
