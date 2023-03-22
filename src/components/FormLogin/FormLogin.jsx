import React from 'react';
import classes from './FormLogin.module.css';
import { Field } from 'redux-form';
import Input from '../Input/Input';
import { reqired, maxLengthCreator } from '../../utils/validators/validator';

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {

   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <Field
            placeholder='login'
            name={'login'}
            component={Input}
            validate={[reqired, maxLength30]}
         />
         <Field
            placeholder='password'
            name={'password'}
            component={Input}
            validate={[reqired, maxLength30]}
         />
         <div>
            <Field
               type={'checkbox'}
               name={'rememberMe'}
               component={Input}
            /> remember me
         </div>
         <button>Login</button>
      </form>
   );
};

export default LoginForm;