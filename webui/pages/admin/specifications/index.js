import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import App from '../../../components/AppContainer';
import SpecificationListContainer from '../../../components/admin/SpecificationListContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Header>Pflichtenhefte</Header>
      <SpecificationListContainer />
    </Container>
  </App>
);
