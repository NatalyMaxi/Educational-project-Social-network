// import React from 'react';
// import classes from './Users.module.css';
// import axios from 'axios';
// import avatar from '../../images/avatar.jpg'

// const Users = (props) => {
//    if (props.users.length === 0) {

//       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//          props.setUsers(response.data.items)
//       })
//    }

//    return (
//       <section className={classes.users}>
//          <ul className={classes.users__items}>
//             {
//                props.users.map((user) => {
//                   return (
//                      <li className={classes.users__item} key={user.id} >
//                         <img
//                            className={classes.users__avatar}
//                            src={user.photos.small != null ? user.photos.small : avatar}
//                            alt='аватар'
//                         />
//                         <div className={classes.users__status}>
//                            <p className={classes.users__text}>{user.status != null ? user.status : 'I am...'}</p>
//                         </div>
//                         <div className={classes.users__container}>
//                            <h2 className={classes.users__name}>{user.name}</h2>
//                         </div>
//                         <div className={classes.users__container}>
//                            <p className={classes.users__country}>{'Россия'}</p>
//                            <p className={classes.users__city}>{'Тюмень'}</p>
//                         </div>
//                         <div className={classes.users__container}>
//                            {user.followed
//                               ?
//                               <button
//                                  className={classes.users__button}
//                                  onClick={() => { props.unfollow(user.id) }}>
//                                  Follow
//                               </button>
//                               :
//                               <button className={`${classes.users__button} ${classes.users__button_type_unfllow}`}
//                                  onClick={() => { props.follow(user.id) }}>
//                                  Unfollow
//                               </button>
//                            }
//                         </div>
//                      </li>
//                   )
//                })
//             }
//          </ul>
//       </section>
//    );
// };

// export default Users;