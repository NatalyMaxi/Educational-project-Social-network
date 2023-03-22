import React from 'react';
import LoginForm from '../FormLogin/FormLogin';
import classes from './Login.module.css';
import { reduxForm } from 'redux-form'

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return (
      <div className={classes.login}>login
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
};

export default Login;
