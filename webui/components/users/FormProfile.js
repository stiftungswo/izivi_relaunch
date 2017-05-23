import React from 'react';
import Head from 'next/head';
import { Grid, Segment, Divider, Header, Label } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';
import PhoneField from '../../lib/FormPhoneInput';
import DateField from '../../lib/FormDateInput';
import UploadAvatar from './UploadAvatarContainer';

const FormProfile = ({ username, regionalOfficeOptions, drivingLicenceOptions, ...formProps }) => (
  <AutoForm showInlineError {...formProps} >
    <Head>
      <link rel="stylesheet" href="/static/react-phone-number-input/rrui.css" />
      <link rel="stylesheet" href="/static/react-phone-number-input/style.css" />
      <link rel="stylesheet" href="/static/react-datepicker/react-datepicker.css" />
    </Head>
    <Grid stackable columns={3}>
      <Grid.Row columns={1}>
        <Grid.Column textAlign="center">
          <Segment basic>
            <UploadAvatar />
            <Label style={{ marginTop: '5px' }}>
              Zivi Nummer:
              <Label.Detail>{username}</Label.Detail>
            </Label>
          </Segment>
          <Divider />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width={6}>
          <AutoField name="firstName" />
        </Grid.Column>
        <Grid.Column width={10}>
          <AutoField name="lastName" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column width={4}>
          <AutoField name="phoneMobile" component={PhoneField} country="CH" />
        </Grid.Column>
        <Grid.Column width={4}>
          <AutoField name="birthday" component={DateField} />
        </Grid.Column>
        <Grid.Column width={8}>
          <AutoField name="hometown" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Segment secondary>
            <Header>Adresse</Header>
            <Grid stackable columns={3}>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <AutoField name="street" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column width={3}>
                  <AutoField name="postalNumber" />
                </Grid.Column>
                <Grid.Column width={13}>
                  <AutoField name="city" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <AutoField name="regionalOffice" options={regionalOfficeOptions} />
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
