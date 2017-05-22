import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import Router from 'next/router';
import App from '../../components/AppContainer';
import FormMission from '../../components/missions/FormMissionContainer';
import ButtonDeleteMission from '../../components/missions/ButtonDeleteMissionContainer';

const updatedSuccessfully = () => {
  alert('Einsatz aktualisiert');
};

const deletedSuccessfully = () => {
  alert('Einsatz gelöscht');
  return Router.replace({ pathname: '/missions' });
};

export default ({ url, ...rest }) => (
  <App url={url} {...rest}>
    <Container>
      <Header>Einsatz editieren</Header>
      <ButtonDeleteMission _id={url.query._id} onSuccess={deletedSuccessfully} />
      <Divider />
      <FormMission _id={url.query._id} onSubmitSuccess={updatedSuccessfully} />
    </Container>
  </App>
);
