import React from 'react';
import Link from 'next/link';
import { Step, Icon } from 'semantic-ui-react';

export default ({ step, active, iconName, title, subtitle, completed }) => (
  <Link href={`?step=${step}`}>
    <Step href={`?step=${step}`} active={active} completed={completed}>
      <Icon name={iconName} />
      <Step.Content>
        <Step.Title>{title}</Step.Title>
        <Step.Description>{subtitle}</Step.Description>
      </Step.Content>
    </Step>
  </Link>
);
