import React from 'react';
import classes from './FormAddPost.module.css';
import { Field } from 'redux-form';
import { reqired, maxLengthCreator } from '../../utils/validators/validator';
import Textarea from '../Textarea/Textarea';

const maxLength30 = maxLengthCreator(30)

const FormAddPost = (props) => {
console.log(props.placeholder)
   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            name='newPostText'
            placeholder={'Введите сообщение'}
            validate={[reqired, maxLength30]}
         />
         <button className={classes.button}>
            Отправить
         </button>
      </form>
   );
};

export default FormAddPost;