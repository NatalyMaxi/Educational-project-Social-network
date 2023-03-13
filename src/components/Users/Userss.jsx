import React from 'react';
import classes from './Users.module.css';
import axios from 'axios';
import avatar from '../../images/avatar.jpg';

class Userss extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanget = (pageNamber) => {
      this.props.setCurrentPage(pageNamber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)
      }
      
      return (
         <section className={classes.users}>

            <div className={classes.users__pages}>
               {pages.map((page) => {
                  return (
                     <span
                        key={page.id}
                        className={this.props.currentPage === page ?
                           `${classes.users__page} ${classes.users__page_type_current}` :
                           `${classes.users__page} `}
                        onClick={(evt) => {this.onPageChanget(page)}}
                     >
                        {page}
                     </span>
                  )
               })}

            </div>
            <ul className={classes.users__items}>
               {
                  this.props.users.map((user) => {
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
                                    onClick={() => { this.props.unfollow(user.id) }}>
                                    Follow
                                 </button>
                                 :
                                 <button className={`${classes.users__button} ${classes.users__button_type_unfllow}`}
                                    onClick={() => { this.props.follow(user.id) }}>
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
   }
}


export default Userss;