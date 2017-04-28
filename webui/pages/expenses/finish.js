import React from 'react';
import { Container } from 'semantic-ui-react';
import SubNavigationLayout from '../../components/expenses/SubNavigationLayout';

export default ({ ...rest }) => (
  <SubNavigationLayout {...rest}>
    <Container>
      Finish
    </Container>
  </SubNavigationLayout>
);
