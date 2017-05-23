import React from 'react';
import { Grid } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import LongTextField from 'uniforms-semantic/LongTextField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormSkills = ({ drivingLicenceOptions, ...formProps }) => (
  <AutoForm showInlineError {...formProps} >
    <Grid stackable columns={1}>
      <Grid.Row>
        <Grid.Column>
          <AutoField name="drivingLicence" options={drivingLicenceOptions} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <AutoField name="workExperience" component={LongTextField} />
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

export default FormSkills;
