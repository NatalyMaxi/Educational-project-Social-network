import React from 'react';
import classes from './Users.module.css';
import avatar from '../../images/avatar.jpg';

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
                        <img
                           className={classes.users__avatar}
                           src={user.photos.small != null ? user.photos.small : avatar}
                           alt='аватар'
                        />
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
                                 className={classes.users__button}
                                 onClick={() => {props.unfollow(user.id) }}>
                                 Follow
                              </button>
                              :
                              <button className={`${classes.users__button} ${classes.users__button_type_unfllow}`}
                                 onClick={() => { props.follow(user.id) }}>
                                 Unfollow
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