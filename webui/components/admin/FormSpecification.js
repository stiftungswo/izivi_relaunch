import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const CateringFieldMatrix = ({ name }) => (
  <Segment>
    <Header size="tiny">Verpflegung</Header>
    <Grid columns={4}>
      <Grid.Row>
        <Grid.Column computer={4} mobile={16} />
        <Grid.Column computer={4} mobile={5}>
          Morgen
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          Mittag
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          Abend
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={4} mobile={16}>
          Arbeitstag
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          <AutoField decimal name={`${name}.breakfast.costsPerWorkDayCHF`} label={false} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          <AutoField name={`${name}.lunch.costsPerWorkDayCHF`} label={false} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          <AutoField name={`${name}.dinner.costsPerWorkDayCHF`} label={false} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={4} mobile={16}>
          Arbeitsfrei
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          <AutoField name={`${name}.breakfast.costsPerFreeDayCHF`} label={false} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          <AutoField name={`${name}.lunch.costsPerFreeDayCHF`} label={false} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={5}>
          <AutoField name={`${name}.dinner.costsPerFreeDayCHF`} label={false} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

const FormSpecification = formProps => (
  <AutoForm showInlineError {...formProps} >
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <AutoField name="specification.name" />
        </Grid.Column>
        <Grid.Column>
          <AutoField name="specification.governmentId" />
          <AutoField name="specification.isActive" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <AutoField name="specification.configuredExpenseRates.commute" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <AutoField name="specification.configuredExpenseRates.workingClothes" />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <AutoField name="specification.configuredExpenseRates.pocketMoney" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <CateringFieldMatrix name="specification.configuredExpenseRates.catering" />
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

export default FormSpecification;
