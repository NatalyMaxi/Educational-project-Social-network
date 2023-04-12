import React, { useEffect, useState } from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);

   useEffect(() => {
setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true);
   };

   const deActivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   };

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   };

   return <div className={classes.status}>
      {!editMode ? <div>
         <span onDoubleClick={activateEditMode}>{props.status || 'Введите статус'}</span>
      </div> : <div>
         <input type="text" autoFocus={true} onBlur={deActivateEditMode} value={status} onChange={onStatusChange} /></div>}
   </div>;
};

export default ProfileStatus;

