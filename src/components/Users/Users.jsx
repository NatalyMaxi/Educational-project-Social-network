import React from 'react';
import classes from './Users.module.css';
import avatar from '../../images/avatar.jpg';
import { NavLink } from 'react-router-dom';
import Paginator from '../Paginator/Paginator';

const Users = (props) => {

   return (
      <section className={classes.users}>
         <Paginator
            currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanget={props.onPageChanget}
         />
         <ul className={classes.users__items}>
            {
               props.users.map((user) => {
                  return (
                     <li className={classes.users__item} key={user.id} >
                        <NavLink to={'/profile/' + user.id}>
                           <img
                              className={classes.users__avatar}
                              src={user.photos.small != null ? user.photos.small : avatar}
                              alt='аватар'
                           />
                        </NavLink>
                        <div className={classes.users__status}>
                           <p className={classes.users__text}>{user.status != null ? user.status : 'I am...'}</p>
                        </div>
                        <div className={classes.users__container}>
                           <h2 className={classes.users__name}>{user.name}</h2>
                        </div>
                        <div className={classes.users__container}>
                           <p className={classes.users__country}>{'Россия'}</p>
                           <p className={classes.users__city}>{'Тюмень'}</p>
                        </div>
                        <div className={classes.users__container}>
                           {user.followed
                              ?
                              <button
                                 disabled={props.followingInProgress.some(id => id === user.id)}
                                 className={`${classes.users__button} ${classes.users__button_type_unfllow}`}
                                 onClick={() => props.unfollow(user.id)}>
                                 Unfollow
                              </button>
                              :
                              <button
                                 disabled={props.followingInProgress.some(id => id === user.id)}
                                 className={classes.users__button}
                                 onClick={() => props.follow(user.id)}>
                                 Follow
                              </button>

                           }
                        </div>
                     </li>
                  )
               })
            }
         </ul>
      </section>
   );
};

export default Users;