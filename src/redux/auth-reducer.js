import { authAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isLoading: false,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA: {
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      }
      case TOGGLE_IS_LOADING: {
         return {
            ...state,
            isLoading: action.isLoading
         }
      }
      default:
         return state;
   }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } })
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

//thunk

export const getAuthUserData = () => {
   return (dispatch) => {
      authAPI.me()
         .then(response => {
            if (response.data.resultCode === 0) {
               let { id, email, login } = response.data.data
               dispatch(setAuthUserData(id, email, login))
            }
         })
   }

}

export default authReducer;