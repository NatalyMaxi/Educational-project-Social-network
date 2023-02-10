import React from "react";
import classes from "./Messages.module.css";
import UserItem from "./UserItem/UserItem";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
   return (
      <div className={classes.messages}>
         <ul className={classes.messages__users}>
            <UserItem name='Илья' id='1' />
            <UserItem name='Ната' id='2' />
            <UserItem name='Оля' id='3' />
            <UserItem name='Валя' id='4' />
            <UserItem name='Саша' id='5' />
         </ul>

         <ul className={classes.messages__dialogs}>
            <Dialog message='Hi я Илья' />
            <Dialog message='Hi я Ната' />
            <Dialog message='Hi я Оля' />
            <Dialog message='Hi я Валя' />
            <Dialog message='Hi я Саша' />

         </ul>
      </div>
   );
};

export default Messages;
