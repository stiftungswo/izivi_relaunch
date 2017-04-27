import React from 'react';
import Link from 'next/link';
import { Menu, Dropdown, Label } from 'semantic-ui-react';

export default ({ pathname, loggedInUser, logout }) => (loggedInUser ? (
  <Menu color="blue" attached="top" size="tiny">
    <Link href="/">
      <Menu.Item active={(pathname === '/')}>
        <Label left basic size="big" circular color="blue" horizontal>iZ</Label>
      </Menu.Item>
    </Link>
    <Link href="/missions">
      <Menu.Item active={(pathname === '/missions')}>
        <span>Einsätze</span>
      </Menu.Item>
    </Link>
    <Link href="/expenses">
      <Menu.Item active={(pathname === '/expenses')}>
        <span>Spesen</span>
      </Menu.Item>
    </Link>
    <Link href="/users">
      <Menu.Item active={(pathname === '/users')}>
        <span>Benutzer</span>
      </Menu.Item>
    </Link>
    <Dropdown
      item icon="settings"
      active={
          pathname === '/admin/holidays' ||
          pathname === '/admin/specifications' ||
          pathname === '/admin/export'
      }
    >
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
        <Link href="/export">
          <Dropdown.Item active={(pathname === '/export')}>
            <span>Datenbankexport</span>
          </Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Menu position="right">
      <Dropdown
        item icon="user"
        active={
          pathname === '/profile' ||
          pathname === '/account' ||
          pathname === '/help'
        }
      >
        <Dropdown.Menu>
          <Link href="/profile">
            <Dropdown.Item active={(pathname === '/profile')}>
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
  </Menu>
) : (
  <Menu color="blue" inverted attached>
    <Menu.Item>
      <h2>iZivi 2.0</h2>
    </Menu.Item>
  </Menu>
));
