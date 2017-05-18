import React from 'react';
import Router from 'next/router';
import { Container, Header } from 'semantic-ui-react';
import App from '../../../components/AppContainer';
import FormSpecification from '../../../components/admin/FormSpecificationContainer';

const redirect = ({ _id }) => {
  if (_id) {
    alert('Pflichtenheft erstellt');
    return Router.push({
      pathname: '/admin/specifications/edit',
      query: { _id },
    });
  }
  return Router.push({ pathname: '/admin/specifications' });
};

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Header>Neues Pflichtenheft erstellen</Header>
      <FormSpecification onSubmitSuccess={redirect} />
    </Container>
  </App>
);
