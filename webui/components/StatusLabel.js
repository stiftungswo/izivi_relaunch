import React from 'react';
import { Label } from 'semantic-ui-react';

export default ({ statusColor, localizedStatus }) => (
  <Label horizontal color={statusColor}>
    {localizedStatus}
  </Label>
);
