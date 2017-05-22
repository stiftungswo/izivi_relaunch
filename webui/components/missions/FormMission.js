import React from 'react';
import Head from 'next/head';
import { Grid, Segment, Header, Dimmer, Loader } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SelectField from 'uniforms-semantic/SelectField';
import AutoForm from 'uniforms-semantic/AutoForm';
import DateField from '../../lib/FormDateInput';

const FormMission = ({ specificationOptions, userId, ...formProps }) => (
  <AutoForm showInlineError {...formProps} >
    <Head>
      <link rel="stylesheet" href="/static/react-datepicker/react-datepicker.css" />
    </Head>
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Header as="h4" content="Pflichtenheft" subheader="Bitte wähle das Pflichtenheft aus" />
            {specificationOptions ? (
              <AutoField
                name="mission.specificationId"
                label={null}
                options={specificationOptions}
                component={SelectField}
              />
            ) : (
              <Dimmer active inverted>
                <Loader active inline="centered" />
              </Dimmer>
            )}
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header as="h4" content="Schnuppertag" subheader="Hast du bei der SWO bereits einen Schnuppertag absolviert? Wenn ja, wann?" />
            <AutoField name="mission.trialDay" label={null} component={DateField} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Segment>
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <AutoField name="mission.start" component={DateField} />
                  <AutoField name="mission.end" component={DateField} />
                </Grid.Column>
                <Grid.Column>
                  <AutoField name="mission.isFirstMission" />
                  <AutoField name="mission.isLastMission" />
                  <AutoField name="mission.isLongMission" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
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

export default FormMission;
