import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
   posts: [
      { id: 1, message: 'Blabla', likesCount: '3' },
      { id: 2, message: 'Hi', likesCount: '23' },
      { id: 3, message: 'Axaxa', likesCount: '3' },
      { id: 4, message: 'Yo', likesCount: '0' },],
   newPostText: '',
   profile: null,
   status: '',
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         }
      }
      default:
         return state;
   }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

//thunk

export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId)
         .then(response => {
            dispatch(setUserProfile(response.data))
         })
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then(response => {
            dispatch(setStatus(response.data))
         })
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(response => {
            if(response.data.resultCode ===0){
               dispatch(setStatus(status))}
         })
   }
}

export default profileReducer;