const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Blabla', likesCount: '3' },
            { id: 2, message: 'Hi', likesCount: '23' },
            { id: 3, message: 'Axaxa', likesCount: '3' },
            { id: 4, message: 'Yo', likesCount: '0' },],
         newPostText: ''
      },
      messagesPage: {
         users: [
            { id: 1, name: 'Илья' },
            { id: 2, name: 'Ната' },
            { id: 3, name: 'Оля' },
            { id: 4, name: 'Валя' },
            { id: 5, name: 'Саша' },
         ],
         messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Yo' },
            { id: 3, message: 'Привет' },
            { id: 4, message: 'Hi' },
            { id: 5, message: 'Hi' },
         ]
      }
   },

   _callSubscriber() {
   },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   // addPost() {
   //    let newPost = {
   //       id: 5,
   //       message: this._state.profilePage.newPostText,
   //       likesCount: 0
   //    }
   //    this._state.profilePage.posts.push(newPost);
   //    this._state.profilePage.newPostText = '';
   //    this._callSubscriber(this._state)
   // },

   // updateNewPostText(newText) {
   //    this._state.profilePage.newPostText = newText
   //    this._callSubscriber(this._state)
   // },

   dispatch(action) { // {type: ''}
      if (action.type === ADD_POST) {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         }
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state)
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText
         this._callSubscriber(this._state)
      }
   }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export default store;