import React from 'react';
import Router from 'next/router';
import { Step, Segment, Container } from 'semantic-ui-react';
import App from '../../components/AppContainer';
import ProfileStepItem from '../../components/users/StepItemContainer';
import FormProfile, { PROFILE } from '../../components/users/FormProfileContainer';
import FormBank, { BANK } from '../../components/users/FormBankContainer';
// import FormInsurance, { INSURANCE } from '../../components/users/FormInsuranceContainer';
import FormSkills, { SKILLS } from '../../components/users/FormSkillsContainer';

const redirect = step => () => {
  if (step) {
    return Router.push({
      pathname: '/users/profile',
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
        {/* <ProfileStepItem
          step={INSURANCE}
          active={(url.query.step === INSURANCE)}
          iconName="heart"
          title="Versicherung"
          subtitle="Krankenkasse"
        /> */}
        <ProfileStepItem
          step={SKILLS}
          active={(url.query.step === SKILLS)}
          iconName="rocket"
          title="Skills"
          subtitle="Arbeitserfahrung"
        />
      </Step.Group>
      <Segment attached>
        {(url.query.step === PROFILE || !url.query.step) && (
          <FormProfile onSubmitSuccess={redirect(BANK, url.query.userId)} />
        )}
        {(url.query.step === BANK) && (
          <FormBank onSubmitSuccess={redirect(SKILLS, url.query.userId)} />
        )}
        {/* {(url.query.step === INSURANCE) && (
          <FormInsurance onSubmitSuccess={redirect(null, url.query.userId)} />
        )} */}
        {(url.query.step === SKILLS) && (
          <FormSkills onSubmitSuccess={redirect(null, url.query.userId)} />
        )}
      </Segment>
    </Container>
  </App>
);
