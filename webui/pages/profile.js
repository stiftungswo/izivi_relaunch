import React from 'react';
import Head from 'next/head';
import { Step, Segment, Container } from 'semantic-ui-react';
import App from '../lib/AppContainer';
import ProfileStepItem from '../modules/profile/StepItemContainer';
import FormPersonalData from '../modules/profile/FormPersonalDataContainer';

export default ({ url, ...rest }) => (
  <App url={url} {...rest}>
    <Head>
      <link rel="stylesheet" href="/static/react-phone-number-input/rrui.css" />
      <link rel="stylesheet" href="/static/react-phone-number-input/style.css" />
      <link rel="stylesheet" href="/static/react-datepicker/react-datepicker.css" />
    </Head>
    <Container>
      <Step.Group size="mini" className="three top attached">
        <ProfileStepItem
          step="profile"
          active={(url.query.step === 'profile' || !url.query.step)}
          iconName="truck"
          title="Profil"
          subtitle="Persönliche Informationen"
        />
        <ProfileStepItem
          step="bank"
          active={(url.query.step === 'bank')}
          iconName="credit card"
          title="Bank"
          subtitle="Auszahlung der Spesen"
        />
        <ProfileStepItem
          step="insurance"
          active={(url.query.step === 'insurance')}
          iconName="heart"
          title="Versicherung"
          subtitle="Krankenkasse"
        />
      </Step.Group>
      <Segment attached>
        {(url.query.step === 'profile' || !url.query.step) && (
          <FormPersonalData />
        )}
        {(url.query.step === 'bank') && (
          <span>Bank</span>
        )}
        {(url.query.step === 'insurance') && (
          <span>Insurance</span>
        )}
      </Segment>
    </Container>
  </App>
);
