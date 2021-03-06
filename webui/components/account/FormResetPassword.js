import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormResetPassword = formProps => (
  <AutoForm {...formProps} >
    <AutoField name="password" type="password" />
    <AutoField name="passwordConfirm" type="password" />
    <ErrorsField />
    <SubmitField value="Passwort ändern" className="primary" />
  </AutoForm>
);

export default FormResetPassword;
