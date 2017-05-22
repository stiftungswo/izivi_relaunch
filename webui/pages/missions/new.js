import React from 'react';
import Router from 'next/router';
import { Container, Header, Divider } from 'semantic-ui-react';
import App from '../../components/AppContainer';
import FormMission from '../../components/missions/FormMissionContainer';

const redirect = ({ _id }) => {
  if (_id) {
    alert('Einsatz erstellt');
    return Router.replace({
      pathname: '/missions/edit',
      query: { _id },
    });
  }
  return Router.replace({ pathname: '/missions' });
};

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Header>Neuer Einsatz</Header>
      <Divider />
      <FormMission onSubmitSuccess={redirect} />
    </Container>
  </App>
);
