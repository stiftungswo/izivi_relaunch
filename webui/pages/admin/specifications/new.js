import React from 'react';
import Router from 'next/router';
import { Container, Header, Divider } from 'semantic-ui-react';
import App from '../../../components/AppContainer';
import FormSpecification from '../../../components/admin/FormSpecificationContainer';

const redirect = ({ _id }) => {
  if (_id) {
    alert('Pflichtenheft erstellt');
    return Router.replace({
      pathname: '/admin/specifications/edit',
      query: { _id },
    });
  }
  return Router.replace({ pathname: '/admin/specifications' });
};

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Header>Neues Pflichtenheft erstellen</Header>
      <Divider />
      <FormSpecification onSubmitSuccess={redirect} />
    </Container>
  </App>
);
