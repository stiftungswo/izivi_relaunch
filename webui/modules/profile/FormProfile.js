import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';
import PhoneField from '../../lib/FormPhoneInput';
import DateField from '../../lib/FormDateInput';

const FormProfile = formProps => (
  <AutoForm showInlineError {...formProps} >
    <AutoField name="username" disabled label="Zivildienstnummer" />
    <AutoField name="profile.firstName" />
    <AutoField name="profile.lastName" />
    <AutoField name="profile.street" />
    <AutoField name="profile.postalNumber" />
    <AutoField name="profile.city" />
    <AutoField name="profile.birthday" component={DateField} />
    <AutoField name="profile.phoneMobile" component={PhoneField} country="CH" />
    <AutoField name="profile.phoneWork" component={PhoneField} country="CH" />
    <ErrorsField />
    <SubmitField value="Speichern" className="primary" />
  </AutoForm>
);

export default FormProfile;
