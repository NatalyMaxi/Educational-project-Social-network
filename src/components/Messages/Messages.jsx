import React from 'react';
import classes from './Messages.module.css';
import UserItem from './UserItem/UserItem';
import Dialog from './Dialog/Dialog';
import FormAddMessage from '../FormAddMessage/FormAddMessage';
import { reduxForm } from 'redux-form';

const AddMessageReduxForm = reduxForm({
   form: 'dialogAddMessageForm'
})(FormAddMessage)

const Messages = (props) => {
   let usrsElements = props.messagesPage.users.map((user) =>
      <UserItem name={user.name} id={user.id} key={user.id} />)

   let messagesElements = props.messagesPage.messages.map((msg) =>
      <Dialog message={msg.message} id={msg.id} key={msg.id} />)

   const onSubmit = (values) => {
      props.sendMessage(values.newMessageText)
   }

   return (
      <div className={classes.messages}>
         <ul className={classes.messages__users}>
            {usrsElements}
         </ul>
         <div className={classes.messages__dialogs}>
            <div>{messagesElements}</div>
            <AddMessageReduxForm {...props} onSubmit={onSubmit} />
         </div>
      </div>
   );
};

export default Messages;
