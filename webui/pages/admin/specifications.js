import React from 'react';
import { Container } from 'semantic-ui-react';
import App from '../../components/AppContainer';
import FormSpecification from '../../components/admin/FormSpecificationContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <p>Pflichtenhefte</p>
      <FormSpecification />
    </Container>
  </App>
);
