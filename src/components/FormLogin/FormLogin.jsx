import React from 'react';
import classes from './FormLogin.module.css';
import { Field } from 'redux-form';
import Input from '../Input/Input';
import { reqired } from '../../utils/validators/validator';

const LoginForm = (props) => {

   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <Field
            placeholder='Email'
            name={'email'}
            //type={'email'}
            component={Input}
            validate={[reqired]}
         />
         <Field
            placeholder='Password'
            name={'password'}
            type={'password'}
            component={Input}
            validate={[reqired]}
         />
         <div>
            <Field
               type={'checkbox'}
               name={'rememberMe'}
               component={Input}
            /> remember me
         </div>
         {
            props.error && <div className={classes.formError}>{props.error}</div>
         }
         <button>Залогиниться</button>
      </form>
   );
};

export default LoginForm;