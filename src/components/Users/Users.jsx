import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, photoUrl: 'https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg', followed: true, fullName: 'Илья', status: 'I am a boss', location: { city: 'Тюмень', country: 'Россия' } },
         { id: 2, photoUrl: 'https://mobimg.b-cdn.net/v3/fetch/d4/d4e66fe3adbadc49d637c0e804f1e629.jpeg', followed: true, fullName: 'Наталья', status: 'I am a macovka', location: { city: 'Тюмень', country: 'Россия' } },
         { id: 3, photoUrl: 'https://a.d-cd.net/f10fab5s-1920.jpg', followed: true, fullName: 'Зевс', status: 'I am a cat', location: { city: 'Тюмень', country: 'Россия' } },
         { id: 4, photoUrl: 'https://www.fonstola.ru/images/201212/fonstola.ru_84796.jpg', followed: false, fullName: 'Олег', status: 'I am ...', location: { city: 'Мадрид', country: 'Испания' } },
      ])
   }



   return (
      <section className={classes.users}>
         <ul>
            {
               props.users.map((user) => {
                  return (
                     <li key={user.id} >
                        <span>
                           <div>
                              <img className={classes.users__photo} src={user.photoUrl} alt='аватар' />
                           </div>
                           <div>
                              {user.followed
                                 ? <button onClick={() => { props.unfollow(user.id) }}>Follow</button>
                                 : <button onClick={() => { props.follow(user.id) }}>Unfollow</button>}
                              
                           </div>
                        </span>
                        <span>
                           <span>
                              <div>{user.fullName}</div>
                              <div>{user.status}</div>
                           </span>
                           <span>
                              <div>{user.location.country}</div>
                              <div>{user.location.city}</div>
                           </span>
                        </span>
                     </li>
               )
               })
            }
         </ul>
      </section>
   );
};

export default Users;