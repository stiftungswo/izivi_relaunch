import React from 'react';
import { Menu } from 'semantic-ui-react';
import AutoField from 'uniforms-semantic/AutoField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import AutoForm from 'uniforms-semantic/AutoForm';

const FormSignIn = ({ loginType, changeLoginType, ...formProps }) => (
  <AutoForm {...formProps} >
    <Menu tabular>
      <Menu.Item name="email" active={loginType === 'email'} onClick={changeLoginType}>
        E-Mail
      </Menu.Item>
      <Menu.Item name="username" active={loginType === 'username'} onClick={changeLoginType}>
        ZDP-Nummer
      </Menu.Item>
    </Menu>
    {(loginType === 'email') && (
      <AutoField id="email" name="email" />
    )}
    {(loginType === 'username') && (
      <AutoField id="username" autoComplete="off" fieldType={Number} name="username" />
    )}
    <AutoField name="password" type="password" label="Passwort" />
    <ErrorsField />
    <SubmitField value="Anmelden" className="primary" />
  </AutoForm>
);


export default FormSignIn;
