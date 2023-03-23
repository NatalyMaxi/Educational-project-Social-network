import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = 'INITIALIZED-SUCCESSFULLY';

let initialState = {
   initialized: false,
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESSFULLY: {
         return {
            ...state,
            initialized: true,
         }
      }
      default:
         return state;
   }
}

export const initializedSuccessfully = () => ({ type: INITIALIZED_SUCCESSFULLY, })

//thunk

export const initializeApp = () => {
   return (dispatch) => {
      let promise = dispatch(getAuthUserData());
      Promise.all([promise])
         .then(() => {
            dispatch(initializedSuccessfully())
         })
   }
}


export default appReducer;