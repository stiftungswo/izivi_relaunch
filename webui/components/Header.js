import React from 'react';
import Link from 'next/link';
import { Menu, Dropdown, Label, Header } from 'semantic-ui-react';

const MenuLayout = ({ pathname, children, loading, ...rest }) => (
  <Menu color="blue" attached="top" size="tiny" {...rest}>
    <Link href="/">
      <Menu.Item active={(pathname === '/')}>
        <Label basic size="big" circular color="blue" horizontal>iZ</Label>
      </Menu.Item>
    </Link>
    {!loading && (
      children
    )}
  </Menu>
);

export default ({ pathname, loggedInUser, logout, ...rest }) => (loggedInUser ? (
  <MenuLayout pathname={pathname} {...rest}>
    <Link href="/missions">
      <Menu.Item active={(pathname.substr(0, 9) === '/missions')}>
        <span>Einsätze</span>
      </Menu.Item>
    </Link>
    <Link href="/expenses">
      <Menu.Item active={(pathname.substr(0, 9) === '/expenses')}>
        <span>Spesen</span>
      </Menu.Item>
    </Link>
    <Link href="/users">
      <Menu.Item active={(pathname.substr(0, 6) === '/users')}>
        <span>Benutzer</span>
      </Menu.Item>
    </Link>
    <Menu.Menu position="right">
      <Dropdown item icon="settings">
        <Dropdown.Menu>
          <Link href="/admin/holidays">
            <Dropdown.Item active={(pathname === '/admin/holidays')}>
              <span>Feiertage & Betriebsferien</span>
            </Dropdown.Item>
          </Link>
          <Link href="/admin/specifications">
            <Dropdown.Item active={(pathname === '/admin/specifications')}>
              <span>Pflichtenhefte</span>
            </Dropdown.Item>
          </Link>
          <Link href="/admin/export">
            <Dropdown.Item active={(pathname === '/admin/export')}>
              <span>Datenbankexport</span>
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item icon="user">
        <Dropdown.Menu>
          <Link href="/users/profile">
            <Dropdown.Item active={(pathname === '/users/profile')}>
              <span>Profil</span>
            </Dropdown.Item>
          </Link>
          <Link href="/account">
            <Dropdown.Item active={(pathname === '/account')}>
              <span>Benutzerkonto</span>
            </Dropdown.Item>
          </Link>
          <Link href="/help">
            <Dropdown.Item active={(pathname === '/help')}>
              <span>Hilfe</span>
            </Dropdown.Item>
          </Link>
          <Dropdown.Item onClick={logout}>Abmelden</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </MenuLayout>
) : (
  <MenuLayout pathname={pathname} {...rest}>
    <Menu.Item>
      <Header size="medium" color="blue">iZivi 2.0</Header>
    </Menu.Item>
  </MenuLayout>
));
