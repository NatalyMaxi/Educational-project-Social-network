import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";

const MessageContainer = (props) => {
   let state = props.store.getState().messagesPage;

   let sendMessage = () => {
      let action = sendMessageCreator()
      props.store.dispatch(action)
   }

   let onMessageChange = (text) => {
      let action = updateNewMessageTextCreator(text)
      props.store.dispatch(action)

   }

   return (<Messages
      sendMessage={sendMessage}
      updateMessageText={onMessageChange}
      // users={state.messagesPage.users}
      // messages={state.messagesPage.messages}
      // newMessageText={state.messagesPage.newMessageText}
      messagesPage={state}
   />)
}

export default MessageContainer;