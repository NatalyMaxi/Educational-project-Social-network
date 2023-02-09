import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

   return (
      <div className={classes.post}>
         <img
            className={classes.post__avatar}
            src='https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg'
            alt="аввтвр"
         />
         {props.message}
         <div>
            <span className={classes.post__likeBtn}>like</span>{props.likesCount}
         </div>
      </div>
   );
};

export default Post;
