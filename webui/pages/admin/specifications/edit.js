import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import Router from 'next/router';
import App from '../../../components/AppContainer';
import FormSpecification from '../../../components/admin/FormSpecificationContainer';
import ButtonDeleteSpecification from '../../../components/admin/ButtonDeleteSpecificationContainer';

const updatedSuccessfully = () => {
  alert('Pflichtenheft aktualisiert');
};

const deletedSuccessfully = () => {
  alert('Pflichtenheft gelöscht');
  return Router.replace({ pathname: '/admin/specifications' });
};

export default ({ url, ...rest }) => (
  <App url={url} {...rest}>
    <Container>
      <Header>Pflichtenheft editieren</Header>
      <ButtonDeleteSpecification _id={url.query._id} onSuccess={deletedSuccessfully} />
      <Divider />
      <FormSpecification _id={url.query._id} onSubmitSuccess={updatedSuccessfully} />
    </Container>
  </App>
);
