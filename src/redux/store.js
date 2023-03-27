// import messagesReducer from './messages-reducer';
// import profileReducer from './profile-reducer';
// import sidebarReducer from './sidebar-reducer';

// let store = {
//    _state: {
//       profilePage: {
//          posts: [
//             { id: 1, message: 'Blabla', likesCount: '3' },
//             { id: 2, message: 'Hi', likesCount: '23' },
//             { id: 3, message: 'Axaxa', likesCount: '3' },
//             { id: 4, message: 'Yo', likesCount: '0' },],
//          newPostText: ''
//       },
//       messagesPage: {
//          users: [
//             { id: 1, name: 'Илья' },
//             { id: 2, name: 'Ната' },
//             { id: 3, name: 'Оля' },
//             { id: 4, name: 'Валя' },
//             { id: 5, name: 'Саша' },
//          ],
//          messages: [
//             { id: 1, message: 'Hi' },
//             { id: 2, message: 'Yo' },
//             { id: 3, message: 'Привет' },
//             { id: 4, message: 'Hi' },
//             { id: 5, message: 'Hi' },
//          ],
//          newMessageText: ''
//       },
//       sidebar: {}
//    },

//    _callSubscriber() {
//    },

//    getState() {
//       return this._state;
//    },

//    subscribe(observer) {
//       this._callSubscriber = observer;
//    },

//    dispatch(action) { // {type: ''}

//       this._state.profilePage = profileReducer(this._state.profilePage, action)
//       this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
//       this._state.sidebar = sidebarReducer(this._state.sidebar, action)

//       this._callSubscriber(this._state)
//    }

// }

// export default store;