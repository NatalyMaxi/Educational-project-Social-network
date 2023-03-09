const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

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
         ],
         newMessageText: ''
      },
      sidebar: {}
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
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         this._state.messagesPage.newMessageText = action.text
         this._callSubscriber(this._state)
      } else if (action.type === SEND_MESSAGE) {
         let text = this._state.messagesPage.newMessageText;
         this._state.messagesPage.newMessageText = '';
         this._state.messagesPage.messages.push({ id: 6, message: text })
         this._callSubscriber(this._state)
      }
   }

}

export const addPostCreator = () => ({type: ADD_POST})

export const updateNewPostTextCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      text: text
   } 
}

export default store;