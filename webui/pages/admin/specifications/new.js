import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import App from '../../../components/AppContainer';
import FormSpecification from '../../../components/admin/FormSpecificationContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Header>Neues Pflichtenheft erstellen</Header>
      <FormSpecification />
    </Container>
  </App>
);
