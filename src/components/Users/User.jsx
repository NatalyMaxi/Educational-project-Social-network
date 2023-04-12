import React from 'react';
import classes from './User.module.css';
import avatar from '../../images/avatar.jpg';
import { NavLink } from 'react-router-dom';

const User = (props) => {

   return (
      <li className={classes.user}>
         <NavLink to={'/profile/' + props.user.id}>
            <img
               className={classes.user__avatar}
               src={props.user.photos.small != null ? props.user.photos.small : avatar}
               alt='аватар'
            />
         </NavLink>
         <div className={classes.user__status}>
            <p className={classes.user__text}>{props.user.status != null ? props.user.status : 'I am...'}</p>
         </div>
         <div className={classes.user__container}>
            <h2 className={classes.user__name}>{props.user.name}</h2>
         </div>
         <div className={classes.user__container}>
            <p className={classes.user__country}>{'Россия'}</p>
            <p className={classes.user__city}>{'Тюмень'}</p>
         </div>
         <div className={classes.user__container}>
            {props.user.followed
               ?
               <button
                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                  className={`${classes.user__button} ${classes.user__button_type_unfllow}`}
                  onClick={() => props.unfollow(props.user.id)}>
                  Unfollow
               </button>
               :
               <button
                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                  className={classes.user__button}
                  onClick={() => props.follow(props.user.id)}>
                  Follow
               </button>
            }
         </div>
      </li>
   );
};

export default User;