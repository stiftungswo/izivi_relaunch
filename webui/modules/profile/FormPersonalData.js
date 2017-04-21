import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormSignUp = ({ model, schema, onSubmit, onSubmitSuccess, onSubmitFailure }) => (
  <AutoForm {...({ model, schema, onSubmit, onSubmitSuccess, onSubmitFailure })} >
    <AutoField name="username" disabled />
    <AutoField name="firstName" type="firstName" />
    <AutoField name="lastName" type="lastName" />
    <ErrorsField />
    <SubmitField value="Speichern" className="primary" />
  </AutoForm>
);


export default FormSignUp;
