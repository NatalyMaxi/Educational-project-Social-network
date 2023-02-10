import React from 'react';
import classes from './ProfileInfo.module.css';
import blackcat from '../../../images/blackCat-min.png';

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          className={classes.profileInfo__img}
          src={blackcat}
          alt='Картинка черного кота'
        />
      </div>
      <div className={classes.profileInfo__description}>ava + description</div>
    </>

  );
};

export default ProfileInfo;
