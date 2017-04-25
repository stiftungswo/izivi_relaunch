import React from 'react';
import Link from 'next/link';
import { Menu, Dropdown } from 'semantic-ui-react';

export default ({ pathname, loggedInUser, logout }) => (
  <Menu color="blue" inverted attached>
    <Menu.Item>
      <h2>iZivi 2.0</h2>
    </Menu.Item>
    <Link prefetch href="/">
      <Menu.Item className={pathname === '/' ? 'active' : ''}>
        <span>Übersicht</span>
      </Menu.Item>
    </Link>
    {loggedInUser && (
      <Menu.Menu position="right">
        <Dropdown item text={loggedInUser.name} className={pathname === '/profile' ? 'active' : ''}>
          <Dropdown.Menu>
            <Link href="/profile">
              <Dropdown.Item className={pathname === '/profile' ? 'active' : ''}>
                <span>Profil</span>
              </Dropdown.Item>
            </Link>
            <Link href="/account">
              <Dropdown.Item className={pathname === '/account' ? 'active' : ''}>
                <span>Benutzerkonto</span>
              </Dropdown.Item>
            </Link>
            <Link href="/help">
              <Dropdown.Item className={pathname === '/help' ? 'active' : ''}>
                <span>Hilfe</span>
              </Dropdown.Item>
            </Link>
            <Dropdown.Item onClick={logout}>Abmelden</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )}
  </Menu>
);
