import React from 'react';
import { Field } from 'redux-form';
import classes from './FormEditProfileData.module.css';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
// import { maxLengthCreator } from '../../utils/validators/validator';

// const maxLength30 = maxLengthCreator(30)

const FormEditProfileData = (props) => {
   return (
      <form className={classes.form} onSubmit={props.handleSubmit}>
         <button className={classes.form__button}>Сохранить</button>
         <div>
            <b>Full Name: </b>
            <Field
               component={Input}
               name='fullName'
               placeholder={'Введите ваше полное имя'}
            // validate={[maxLength30]}
            />
         </div>
         <div>
            <b>Loking for a job: </b>
            <Field
               component={Input}
               type={'checkbox'}
               name={'lookingForAJob'}
            // validate={[maxLength30]}
            />
         </div>
         <div>
            <b>My professonal skills: </b>
            <Field
               component={Textarea}
               name='lookingForAJobDescription'
               placeholder={'Введите ваши навыки'}
            // validate={[maxLength30]}
            />
         </div>
         <div>
            <b>My About me: </b>
            <Field
               component={Textarea}
               name='aboutMe'
               placeholder={'О себе'}
            // validate={[maxLength30]}
            />
         </div>
         <div className={classes.form__contact}>
            <b>Contact : </b> {
               Object.keys(props.profile.contacts).map((key) => {
                  return <div key={key}>

                     <b>{key} :
                        <Field
                           component={Input}
                           //name={`${'contacts.'}${key}`}
                           name={'contacts.' + key}
                           placeholder={key}
                        // validate={[maxLength30]}
                        />
                     </b>


                  </div>
               })
            }

         </div>
         {
            props.error && <div className={classes.formError}>{props.error}</div>
         }
      </form>
   )
}

export default FormEditProfileData;