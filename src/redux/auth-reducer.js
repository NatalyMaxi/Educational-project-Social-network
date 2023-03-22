import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
//const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';

let initialState = {
   userId: null,
   email: null,
   login: null,
   //isLoading: false,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA: {
         return {
            ...state,
            ...action.payload,
         }
      }
      // case TOGGLE_IS_LOADING: {
      //    return {
      //       ...state,
      //       isLoading: action.isLoading
      //    }
      // }
      default:
         return state;
   }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })

//export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

//thunk

export const getAuthUserData = () => {
   return (dispatch) => {
      authAPI.me()
         .then(response => {
            if (response.data.resultCode === 0) {
               let { id, login, email } = response.data.data
               dispatch(setAuthUserData(id, login, email,  true))
            }
         })
   }
}

export const login = (email, password, rememberMe) => {
   
   return (dispatch) => {
      authAPI.login(email, password, rememberMe)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
            } else {
               let message = response.data.messages.length > 0
                  ? response.data.messages[0]
                  : 'Some error'
               dispatch(stopSubmit('login', { _error: message }))
            }
         })
   }
}

export const logout = () => {
   return (dispatch) => {
      authAPI.logout()
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, false))
            }
         })
   }
}

export default authReducer;