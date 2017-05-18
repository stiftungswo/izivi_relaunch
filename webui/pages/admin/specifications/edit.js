import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import App from '../../../components/AppContainer';
import FormSpecification from '../../../components/admin/FormSpecificationContainer';

const redirect = () => {
  alert('Pflichtenheft aktualisiert');
};

export default ({ url, ...rest }) => (
  <App url={url} {...rest}>
    <Container>
      <Header>Pflichtenheft editieren</Header>
      <FormSpecification _id={url.query._id} onSubmitSuccess={redirect} />
    </Container>
  </App>
);
