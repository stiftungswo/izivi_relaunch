import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Step, Segment, Container } from 'semantic-ui-react';
import App from '../lib/AppContainer';
import ProfileStepItem from '../modules/profile/StepItemContainer';
import FormProfile, { PROFILE } from '../modules/profile/FormProfileContainer';
import FormBank, { BANK } from '../modules/profile/FormBankContainer';
import FormInsurance, { INSURANCE } from '../modules/profile/FormInsuranceContainer';

const redirect = step => () => {
  if (step) {
    return Router.push({
      pathname: '/profile',
      query: { step },
    });
  }
  return Router.push({ pathname: '/' });
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
          step={PROFILE}
          active={(url.query.step === PROFILE || !url.query.step)}
          iconName="truck"
          title="Profil"
          subtitle="Persönliche Informationen"
        />
        <ProfileStepItem
          step={BANK}
          active={(url.query.step === BANK)}
          iconName="credit card"
          title="Bank"
          subtitle="Auszahlung der Spesen"
        />
        <ProfileStepItem
          step={INSURANCE}
          active={(url.query.step === INSURANCE)}
          iconName="heart"
          title="Versicherung"
          subtitle="Krankenkasse"
        />
      </Step.Group>
      <Segment attached>
        {(url.query.step === PROFILE || !url.query.step) && (
          <FormProfile onSubmitSuccess={redirect(BANK)} />
        )}
        {(url.query.step === BANK) && (
          <FormBank onSubmitSuccess={redirect(INSURANCE)} />
        )}
        {(url.query.step === INSURANCE) && (
          <FormInsurance onSubmitSuccess={redirect()} />
        )}
      </Segment>
    </Container>
  </App>
);
