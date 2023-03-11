import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-145-27.jpeg', followed: true, fullName: 'Илюсик', status: 'I am a boss', location: { city: 'Тюмень', country: 'Россия' } },
         { id: 2, photoUrl: 'https://webmg.ru/wp-content/uploads/2022/05/1625736517_12-kartinkin-com-p-kotyata-anime-anime-krasivo-14.jpg', followed: true, fullName: 'Натусик', status: 'I am a macovka', location: { city: 'Тюмень', country: 'Россия' } },
         { id: 3, photoUrl: 'https://i.pinimg.com/originals/6d/47/05/6d4705c7c8fb464de36cab7e4c0f6561.jpg', followed: true, fullName: 'Зевс', status: 'I am a cat', location: { city: 'Тюмень', country: 'Россия' } },
         { id: 4, photoUrl: 'https://www.fonstola.ru/images/201212/fonstola.ru_84796.jpg', followed: false, fullName: 'Валера', status: 'I am ...', location: { city: 'Мадрид', country: 'Испания' } },
      ])
   }

   return (
      <section className={classes.users}>
         <ul className={classes.users__items}>
            {
               props.users.map((user) => {
                  return (
                     <li className={classes.users__item} key={user.id} >
                        <img className={classes.users__avatar} src={user.photoUrl} alt='аватар' />
                        <div className={classes.users__status}>
                           <p className={classes.users__text}>{user.status}</p>
                        </div>
                        <div className={classes.users__container}>
                           <h2 className={classes.users__name}>{user.fullName}</h2>
                        </div>
                        <div className={classes.users__container}>
                           <p className={classes.users__country}>{user.location.country}</p>
                           <p className={classes.users__city}>{user.location.city}</p>
                        </div>
                        <div className={classes.users__container}>
                           {user.followed
                              ?
                              <button
                                 className={classes.users__button}
                                 onClick={() => { props.unfollow(user.id) }}>
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