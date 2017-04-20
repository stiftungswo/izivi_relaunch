import React from 'react';
import { Menu } from 'semantic-ui-react';
import Head from 'next/head';
import Link from 'next/link';

export default ({ pathname, loggedInUser }) => (
  <Menu>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
      />
    </Head>
    <Menu.Item>
      <h2>iZivi</h2>
    </Menu.Item>
    <Link prefetch href="/">
      <Menu.Item className={pathname === '/' ? 'active' : ''}>
        <span>Übersicht</span>
      </Menu.Item>
    </Link>
    <Link prefetch href="/profile">
      <Menu.Item className={pathname === '/profile' ? 'active' : ''}>
        <span>{loggedInUser.email}</span>
      </Menu.Item>
    </Link>
  </Menu>
);
