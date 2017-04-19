import React from 'react';
import SimpleSchema from 'simpl-schema';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const schema = new SimpleSchema({
  email: {
    type: String,
  },
  password: {
    type: String,
    uniforms: {
      type: 'password',
    },
  },
});

const Login = ({
  onSubmit,
  onSubmitSuccess, onSubmitFailure,
}) => (
  <AutoForm
    {...({ schema, onSubmit, onSubmitSuccess, onSubmitFailure })}
  >
    <AutoField name="email" />
    <AutoField name="password" />
    <ErrorsField />
    <SubmitField value="Anmelden" />
  </AutoForm>
);


export default Login;
