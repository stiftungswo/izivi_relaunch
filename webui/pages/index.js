import React from 'react';
import App from '../containers/app';

export default ({ ...rest }) => (
  <App {...rest}>
    Übersicht über alle Funktionen ist hier (wenn eingeloggt)
  </App>
);
