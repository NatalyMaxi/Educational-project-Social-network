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

      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
         }
         state.posts.push(newPost);
         state.newPostText = '';
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default:
         return state;
   }
}

export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export default profileReducer;