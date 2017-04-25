import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormInsurance = formProps => (
  <AutoForm showInlineError {...formProps} >
    <AutoField name="insurance.insuranceNumber" />
    <ErrorsField />
    <SubmitField value="Speichern" className="primary" />
  </AutoForm>
);

export default FormInsurance;
