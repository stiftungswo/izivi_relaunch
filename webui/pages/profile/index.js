import React from 'react';
import Router from 'next/router';
import { Step, Segment, Container } from 'semantic-ui-react';
import App from '../../components/AppContainer';
import ProfileStepItem from '../../components/profile/StepItemContainer';
import FormProfile, { PROFILE } from '../../components/profile/FormProfileContainer';
import FormBank, { BANK } from '../../components/profile/FormBankContainer';
import FormInsurance, { INSURANCE } from '../../components/profile/FormInsuranceContainer';

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
