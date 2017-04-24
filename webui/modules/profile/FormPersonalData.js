import React from 'react';
import AutoFields from 'uniforms-semantic/AutoFields';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormPersonalData = formProps => (
  <AutoForm showInlineError {...formProps} >
    <AutoFields />
    <ErrorsField />
    <SubmitField value="Speichern" className="primary" />
  </AutoForm>
);

export default FormPersonalData;
