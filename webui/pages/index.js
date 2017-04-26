import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import App from '../lib/AppContainer';
import CardProfileProgress from '../modules/overview/CardProfileProgressContainer';
import CardProjectProgress from '../modules/overview/CardProjectProgressContainer';
import UploadAvatar from '../modules/profile/UploadAvatar';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <UploadAvatar />
      <Card.Group>
        <CardProfileProgress />
        <CardProjectProgress />
      </Card.Group>
    </Container>
  </App>
);
