import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Step, Segment, Container } from 'semantic-ui-react';
import App from '../lib/AppContainer';
import ProfileStepItem from '../modules/profile/StepItemContainer';
import FormPersonalData, { PERSONAL_DATA } from '../modules/profile/FormPersonalDataContainer';

const STEP_BANK = 'BANK';
const STEP_INSURANCE = 'INSURANCE';

const redirect = step => () => {
  Router.push({
    pathname: '/profile',
    query: { step },
  });
};

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
          step={PERSONAL_DATA}
          active={(url.query.step === PERSONAL_DATA || !url.query.step)}
          iconName="truck"
          title="Profil"
          subtitle="Persönliche Informationen"
        />
        <ProfileStepItem
          step={STEP_BANK}
          active={(url.query.step === STEP_BANK)}
          iconName="credit card"
          title="Bank"
          subtitle="Auszahlung der Spesen"
        />
        <ProfileStepItem
          step={STEP_INSURANCE}
          active={(url.query.step === STEP_INSURANCE)}
          iconName="heart"
          title="Versicherung"
          subtitle="Krankenkasse"
        />
      </Step.Group>
      <Segment attached>
        {(url.query.step === PERSONAL_DATA || !url.query.step) && (
          <FormPersonalData onSubmitSuccess={redirect(STEP_BANK)} />
        )}
        {(url.query.step === STEP_BANK) && (
          <span>Bank</span>
        )}
        {(url.query.step === STEP_INSURANCE) && (
          <span>Insurance</span>
        )}
      </Segment>
    </Container>
  </App>
);
