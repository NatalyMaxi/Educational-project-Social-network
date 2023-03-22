import React from 'react';
import classes from './FormAddMessage.module.css';
import { Field } from 'redux-form';

const FormAddMessage = (props) => {

   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <Field
            component={'input'}
            name={'newMessageText'}
            placeholder='Enter your message'
         />
         <button>
            Отправить
         </button>
      </form>
   );
};

export default FormAddMessage;