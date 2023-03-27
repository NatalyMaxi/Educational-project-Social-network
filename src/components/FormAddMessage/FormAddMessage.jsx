import React from 'react';
import classes from './FormAddMessage.module.css';
import { Field } from 'redux-form';
import Textarea from '../Textarea/Textarea';
import { reqired, maxLengthCreator } from '../../utils/validators/validator';

const maxLength30 = maxLengthCreator(30)

const FormAddMessage = (props) => {

   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            name={'newMessageText'}
            placeholder='Enter your message'
            validate={[reqired, maxLength30]}
         />
         <button>
            Отправить
         </button>
      </form>
   );
};

export default FormAddMessage;