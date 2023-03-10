const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT: {
         return {
            ...state,
            newMessageText: action.text
         }
      }
      case SEND_MESSAGE: {
         let text = state.newMessageText;
         return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, { id: 6, message: text }]
         }
      }
      default:
         return state;
   }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      text: text
   }
}

export default messagesReducer;