import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormSignIn = ({
  onSubmit, schema,
  onSubmitSuccess, onSubmitFailure,
}) => (
  <AutoForm
    {...({ schema, onSubmit, onSubmitSuccess, onSubmitFailure })}
  >
    <AutoField name="email" label="E-Mail Adresse" />
    <AutoField name="password" type="password" label="Passwort" />
    <ErrorsField />
    <SubmitField value="Anmelden" className="primary" />
  </AutoForm>
);


export default FormSignIn;
