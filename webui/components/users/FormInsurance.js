import React from 'react';
import { Grid } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';
import FormMaskedInput from '../../lib/FormMaskedInput';

const FormInsurance = formProps => (
  <AutoForm showInlineError {...formProps} >
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column computer={4} tablet={5}>
          <AutoField
            name="healthInsuranceNumber"
            placeholder="00000"
          />
        </Grid.Column>
        <Grid.Column computer={8} tablet={11}>
          <AutoField name="healthInsuranceName" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={4} tablet={5}>
          <AutoField
            name="socialSecurityNumber"
            component={FormMaskedInput}
            mask="756.9999.9999.99"
            maskChar="_"
            alwaysShowMask
          />
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

export default FormInsurance;
