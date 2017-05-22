import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';
import FormMaskedInput from '../../lib/FormMaskedInput';

const FormBank = formProps => (
  <AutoForm showInlineError {...formProps} >
    <AutoField name="name" />
    <AutoField
      name="internationalAccountNumber"
      component={FormMaskedInput}
      mask={'CH99 9999 9999 9999 9999 9'}
      maskChar={'_'}
      alwaysShowMask
    />
    <ErrorsField />
    <SubmitField value="Speichern" className="primary" />
  </AutoForm>
);

export default FormBank;
