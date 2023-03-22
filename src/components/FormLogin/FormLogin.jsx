import React from 'react';
import classes from './FormLogin.module.css';
import { Field } from 'redux-form';

const LoginForm = (props) => {

   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <Field
            placeholder='login'
            name={'login'}
            component={'input'}
         />
         <Field
            placeholder='password'
            name={'password'}
            component={'input'}
         />
         <div>
            <Field
               type={'checkbox'}
               name={'rememberMe'}
               component={'input'}
            /> remember me
         </div>
         <button>Login</button>
      </form>
   );
};

export default LoginForm;