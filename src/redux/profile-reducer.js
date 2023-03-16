const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: 'Blabla', likesCount: '3' },
      { id: 2, message: 'Hi', likesCount: '23' },
      { id: 3, message: 'Axaxa', likesCount: '3' },
      { id: 4, message: 'Yo', likesCount: '0' },],
   newPostText: ''
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

export default profileReducer;