import React from "react";
import classes from "./Messages.module.css";
import UserItem from "./UserItem/UserItem";
import Dialog from "./Dialog/Dialog";

let users = [
   { id: 1, name: 'Илья' },
   { id: 2, name: 'Ната' },
   { id: 3, name: 'Оля' },
   { id: 4, name: 'Валя' },
   { id: 5, name: 'Саша' },
]

let messages = [
   { id: 1, message: 'Hi' },
   { id: 2, message: 'Yo' },
   { id: 3, message: 'Привет' },
   { id: 4, message: 'Hi' },
   { id: 5, message: 'Hi' },
]

let usrsElements = users.map((user) => <UserItem name={user.name} id={user.id} />)
let messagesElements = messages.map((msg) => <Dialog message={msg.message} id={msg.id} />)

const Messages = () => {
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
