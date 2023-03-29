import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../FormLogin/FormLogin';
import classes from './Login.module.css';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { login} from '../../redux/auth-reducer';

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm)

const Login = (props) => {
   
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }

   if (props.isAuth) {
      return <Navigate to='/profile' />
}

   return (
      <div className={classes.login}>login
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
   );
};

let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login})(Login);
