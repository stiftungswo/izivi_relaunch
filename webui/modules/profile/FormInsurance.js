import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';
import FormMaskedInput from '../../lib/FormMaskedInput';

const FormInsurance = formProps => (
  <AutoForm showInlineError {...formProps} >
    <AutoField name="insurance.healthInsuranceName" />
    <AutoField
      name="insurance.healthInsuranceNumber"
      placeholder="00000"
    />
    <AutoField
      name="insurance.socialSecurityNumber"
      component={FormMaskedInput}
      mask="756.9999.9999.99"
      maskChar="_"
      alwaysShowMask
    />
    <ErrorsField />
    <SubmitField value="Speichern" className="primary" />
  </AutoForm>
);

export default FormInsurance;
