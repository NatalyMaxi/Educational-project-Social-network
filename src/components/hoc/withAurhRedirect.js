import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

let mapStateToPropsForRedirect = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export const withAuthRedirect = (Component) => {
   const RedirectComponent = (props) => {
      if (!props.isAuth) return <Navigate to='/login' />
      return (
         <Component {...props} />
      )
   }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
   return ConnectedAuthRedirectComponent;
}

