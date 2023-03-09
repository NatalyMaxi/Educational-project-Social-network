import React from "react";
import classes from "./Messages.module.css";
import UserItem from "./UserItem/UserItem";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {

   let usrsElements = props.messagesPage.users.map((user) =>
      <UserItem name={user.name} id={user.id} />)

   let messagesElements = props.messagesPage.messages.map((msg) =>
      <Dialog message={msg.message} id={msg.id} />)

   let newMessageText = props.messagesPage.newMessageText;

   let onSendMessageClick = () => {
      props.sendMessage()
   }

   let onNewMessageChange = (evt) => {
      let text = evt.target.value;
      props.updateMessageText(text)
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
