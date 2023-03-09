import React from "react";
import classes from "./Messages.module.css";
import UserItem from "./UserItem/UserItem";
import Dialog from "./Dialog/Dialog";
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/messages-reducer'

const Messages = (props) => {

   // let state = props.store.getState().messagesPage;

   let usrsElements = props.state.users.map((user) =>
      <UserItem name={user.name} id={user.id} />)

   let messagesElements = props.state.messages.map((msg) =>
      <Dialog message={msg.message} id={msg.id} />)

   let newMessageText = props.state.newMessageText;

   let onSendMessageClick = () => {
      props.dispatch(sendMessageCreator())
   }

   let onNewMessageChange = (evt) => {
      let text = evt.target.value;
      props.dispatch(updateNewMessageTextCreator(text))
   }

   return (
      <div className={classes.messages}>
         <ul className={classes.messages__users}>
            {usrsElements}
         </ul>

         <div className={classes.messages__dialogs}>
            <div>{messagesElements}</div>
            <div>
               <div>
                  <textarea
                     placeholder='Enter your message'
                     value={newMessageText}
                     onChange={onNewMessageChange}>
                  </textarea>
               </div>
               <div>
                  <button
                     onClick={onSendMessageClick}
                  >Отправить</button></div>
            </div>
         </div>
      </div>
   );
};

export default Messages;
