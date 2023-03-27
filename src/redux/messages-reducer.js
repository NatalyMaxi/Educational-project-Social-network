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
}

const messagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: {
         let text = action.newMessageText;
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: text }]
         }
      }
      default:
         return state;
   }
}

export const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default messagesReducer;