import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormPersonalData = formProps => (
  <AutoForm showInlineError {...formProps} >
    <AutoField name="username" disabled />
    <AutoField name="profile.firstName" />
    <AutoField name="profile.lastName" />
    <ErrorsField />
    <SubmitField value="Speichern" className="primary" />
  </AutoForm>
);

export default FormPersonalData;
