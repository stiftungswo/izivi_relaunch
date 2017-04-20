import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormRecoverPassword = ({
  onSubmit, schema,
  onSubmitSuccess, onSubmitFailure,
}) => (
  <AutoForm
    {...({ schema, onSubmit, onSubmitSuccess, onSubmitFailure })}
  >
    <AutoField name="email" />
    <ErrorsField />
    <SubmitField value="Passwort zurücksetzen" className="primary" />
  </AutoForm>
);

export default FormRecoverPassword;
