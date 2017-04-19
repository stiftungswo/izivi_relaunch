import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormSignUp = ({
  onSubmit, schema,
  onSubmitSuccess, onSubmitFailure,
}) => (
  <AutoForm
    {...({ schema, onSubmit, onSubmitSuccess, onSubmitFailure })}
  >
    <AutoField name="email" />
    <AutoField name="password" type="password" />
    <AutoField name="passwordConfirm" type="password" />
    <ErrorsField />
    <SubmitField value="Registrieren" className="primary" />
  </AutoForm>
);


export default FormSignUp;
