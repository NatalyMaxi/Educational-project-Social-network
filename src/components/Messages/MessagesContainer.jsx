import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageCreator())
      },
      updateMessageText: (text) => {
         dispatch(updateNewMessageTextCreator(text))
      }
   }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessageContainer;