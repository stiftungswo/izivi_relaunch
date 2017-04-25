import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormChangeEmail = ({ resendVerification, isEmailVerified, ...formProps }) => (
  <AutoForm {...formProps} >
    <AutoField name="email" />
    {isEmailVerified ? (
      <Message positive>
        <Message.Header>E-Mail verifiziert</Message.Header>
        <p>Die E-Mail wurde erfolgreich verifiziert.</p>
      </Message>
    ) : (
      <Message warning visible>
        <Message.Header>
          E-Mail noch nicht verifiziert
          <Button type="button" floated="right" basic secondary onClick={resendVerification}>
            Verifizierungsmail erneut zusenden
          </Button>
        </Message.Header>
        <p>Neue Verifizierungsmail gefällig?</p>
      </Message>
    )}
    <ErrorsField />
    <SubmitField value="E-Mail ändern" className="primary" />
  </AutoForm>
);

export default FormChangeEmail;
