import { sendMessage, updateMessageText } from '../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage
   }
}

const MessageContainer = connect(mapStateToProps, { sendMessage, updateMessageText,})(Messages)

export default MessageContainer;