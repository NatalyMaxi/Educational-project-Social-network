import React from "react";
import classes from "./Messages.module.css";
import UserItem from "./UserItem/UserItem";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {

   let usrsElements = props.state.users.map((user) =>
      <UserItem name={user.name} id={user.id} />)
   
   let messagesElements = props.state.messages.map((msg) =>
      <Dialog message={msg.message} id={msg.id} />)

   return (
      <div className={classes.messages}>
         <ul className={classes.messages__users}>
            {usrsElements}
         </ul>

         <ul className={classes.messages__dialogs}>
            {messagesElements}

         </ul>
      </div>
   );
};

export default Messages;
