import React from 'react';
import Link from 'next/link';
import { Container, Menu, Segment } from 'semantic-ui-react';
import App from '../AppContainer';

const getPath = subPage =>
  (subPage ? `/missions${subPage}` : '/missions');

const Tab = ({ subPage, url: { pathname }, children }) => (
  <Link href={getPath(subPage)}>
    <Menu.Item active={getPath(subPage) === pathname} href={getPath(subPage)} >
      {children}
    </Menu.Item>
  </Link>
);

export default ({ url, children, ...rest }) => (
  <App url={url} {...rest}>
    <Container>
      <Menu attached="top" tabular>
        <Tab url={url}>
          Planung
        </Tab>
        <Tab subPage="/reports" url={url}>
          Auswertungen
        </Tab>
      </Menu>
      <Segment attached="bottom">
        {children}
      </Segment>
    </Container>
  </App>
);
