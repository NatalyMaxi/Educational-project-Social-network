import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import blackcat from '../../../images/blackCat-min.png';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from '../ProfileData/ProfileData';
import FormEditProfileData from '../../FormEditProfileData/FormEditProfileData';
import { reduxForm } from 'redux-form';

const AddMessageReduxForm = reduxForm({
  form: 'editProfileDataForm'
})(FormEditProfileData)



const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {//костыльненько, лучше сделать в редьюсере,  чтоб успешно или нет редактирование
        setEditMode(false)
      }
    )
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <>
      <div className={classes.profileInfo__description}>
        <img
          className={classes.profileInfo__img}
          src={props.profile.photos.large || blackcat}
          alt='Фотография'
        />
        {props.isOwner &&
          <input
            type={'file'}
            onChange={onMainPhotoSelected}
          />}
        {editMode ?
          <AddMessageReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} /> :
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true)
            }}
          />

        }
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </>

  );
};

export default ProfileInfo;
