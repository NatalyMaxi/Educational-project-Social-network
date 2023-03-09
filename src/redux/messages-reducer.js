const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

const messagesReducer = (state, action) => {
   switch (action.type) {

      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.text
         return state;

      case SEND_MESSAGE:
         let text = state.newMessageText;
         state.newMessageText = '';
         state.messages.push({ id: 6, message: text })
         return state;

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