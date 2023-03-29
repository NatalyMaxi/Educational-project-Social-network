import React from 'react';
import Contact from '../../../Contact/Contact';
import classes from './ProfileData.module.css';

const ProfileData = (props) => {
   return (
      <section className={classes.ProfileData}>
         {
            props.isOwner && <button
               className={classes.ProfileData__button}
            onClick={props.goToEditMode}>
            Редактировать
            </button>
         }
         <div>
            <b>Full Name: </b> {props.profile.fullName}
         </div>
         <div>
            <b>Loking for a job: </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
         </div>
         {props.profile.lookingForAJob &&
            <div>
               <b>My professonal skills: </b> {props.profile.lookingForAJobDescription}
            </div>

         }
         <div>
            <b>About me: </b> {props.profile.aboutMe}
         </div>
         <div>
            <b>Contacts : </b> {
               Object.keys(props.profile.contacts)
                  .map((key) => {
                     return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={props.profile.contacts[key]}
                     />
                  })
            }
         </div>
      </section>
   )
}

export default ProfileData;