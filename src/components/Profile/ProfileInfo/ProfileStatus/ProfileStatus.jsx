import React from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
   return (
      <div className={classes.status}>
         <div><span>{props.status}</span></div>
         <div> <input type="text" value={props.status} /></div>
      </div>

   );
};

export default ProfileStatus;
