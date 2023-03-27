import React from 'react';
import classes from './Users.module.css';
import Paginator from '../Paginator/Paginator';
import User from './User';

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
                  return <User
                     key={user.id}
                     user={user}
                     follow={props.follow}
                     unfollow={props.unfollow}
                     followingInProgress={props.followingInProgress}
                  />
               })
            }
         </ul>
      </section>
   );
};

export default Users;