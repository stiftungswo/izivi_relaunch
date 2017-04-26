import React from 'react';
import { Grid } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';
import PhoneField from '../../lib/FormPhoneInput';
import DateField from '../../lib/FormDateInput';

const FormProfile = formProps => (
  <AutoForm showInlineError {...formProps} >
    <Grid stackable columns={3}>
      <Grid.Row columns={1}>
        <Grid.Column width={4}>
          <AutoField name="username" disabled label="Zivildienstnummer" size="tiny" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width={6}>
          <AutoField name="profile.firstName" />
        </Grid.Column>
        <Grid.Column width={10}>
          <AutoField name="profile.lastName" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <AutoField name="profile.street" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width={3}>
          <AutoField name="profile.postalNumber" />
        </Grid.Column>
        <Grid.Column width={13}>
          <AutoField name="profile.city" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <AutoField name="profile.phoneMobile" component={PhoneField} country="CH" />
        </Grid.Column>
        <Grid.Column>
          <AutoField name="profile.phoneWork" component={PhoneField} country="CH" />
        </Grid.Column>
        <Grid.Column>
          <AutoField name="profile.birthday" component={DateField} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <ErrorsField />
          <SubmitField value="Speichern" className="primary" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </AutoForm>
);

export default FormProfile;
