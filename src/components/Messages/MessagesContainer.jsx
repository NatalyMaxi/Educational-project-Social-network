import { sendMessage, updateMessageText } from '../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAurhRedirect'
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage,
   }
}

export default compose(
   connect(mapStateToProps, { sendMessage, updateMessageText, }),
   withAuthRedirect
)(Messages);

// compose(
//    connect(mapStateToProps, { sendMessage, updateMessageText, }),
//    withAuthRedirect
// )(Messages)

// let AuthRedirectComponent = withAuthRedirect(Messages)

// const MessageContainer = connect(mapStateToProps, { sendMessage, updateMessageText, })(AuthRedirectComponent)
