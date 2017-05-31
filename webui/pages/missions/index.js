import React from 'react';
import { Container } from 'semantic-ui-react';
import SubNavigationLayout from '../../components/missions/SubNavigationLayout';
import Scheduling from '../../components/missions/SchedulingContainer';

export default ({ ...rest }) => (
  <SubNavigationLayout {...rest}>
    <Container>
      <Scheduling />
    </Container>
  </SubNavigationLayout>
);
