import React from 'react';
import classes from './FormAddPost.module.css';
import { Field } from 'redux-form';

const FormAddPost = (props) => {

   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <Field
            component={'textarea'}
            name={'newPostText'}
            placeholder='Введите сообщение'
         />
         <button>
            Отправить
         </button>
      </form>
   );
};

export default FormAddPost;