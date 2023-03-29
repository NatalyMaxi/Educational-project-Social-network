import React from 'react';
import classes from './ProfileInfo.module.css';
import blackcat from '../../../images/blackCat-min.png';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

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
      {/* <div>
        <img
          className={classes.profileInfo__img}
          src={blackcat}
          alt='Картинка черного кота'
        />
      </div> */}
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
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </>

  );
};

export default ProfileInfo;
