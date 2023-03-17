import React from 'react';
import classes from './Users.module.css';
import avatar from '../../images/avatar.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   let newCurrentPage = props.currentPage;
   let beginningSlicedPages = ((newCurrentPage - 5) < 0) ? 0 : newCurrentPage - 5;
   let endSlicedPages = newCurrentPage + 5;
   let slicedPages = pages.slice(beginningSlicedPages, endSlicedPages);

   return (
      <section className={classes.users}>

         <div className={classes.users__pages}>
            {slicedPages.map((page) => {
               return (
                  <span
                     key={page}
                     className={props.currentPage === page ?
                        `${classes.users__page} ${classes.users__page_active}` :
                        `${classes.users__page} `}
                     onClick={(evt) => { props.onPageChanget(page) }}
                  >
                     {page}
                  </span>
               )
            })}

         </div>
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
                                 onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                       withCredentials: true,
                                       headers: {
                                          'API-KEY': '2afe739f-c21f-4fb5-8d0e-e1a467d3c73b'
                                       }
                                    })
                                       .then(response => {
                                          if (response.data.resultCode === 0) {
                                             props.unfollow(user.id)
                                          }
                                          props.toggleFollowingProgress(false, user.id)
                                       })

                                 }}>
                                 Unfollow
                              </button>
                              :
                              <button
                                 disabled={props.followingInProgress.some(id=> id === user.id)}
                                 className={classes.users__button}
                                 onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                       withCredentials: true,
                                       headers: {
                                          'API-KEY': '2afe739f-c21f-4fb5-8d0e-e1a467d3c73b'
                                       }
                                    })
                                       .then(response => {
                                          if (response.data.resultCode === 0) {
                                             props.follow(user.id)
                                          }
                                          props.toggleFollowingProgress(false, user.id)
                                       })
                                 }}>
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