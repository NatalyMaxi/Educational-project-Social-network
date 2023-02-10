import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
  { id: 1, message: 'Hi', likesCount: '3' },
  { id: 2, message: 'Hi', likesCount: '23' },
  { id: 3, message: 'Hi', likesCount: '3' },
  { id: 4, message: 'Hi', likesCount: '0' },
]

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <div className={classes.myPosts__item}>
        <h2 className={classes.myPosts__title}>My Post</h2>
        <textarea className={classes.myPosts__input} placeholder='Enter a message'></textarea>
        <button className={classes.myPosts__button}>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Привет, как ты?' likesCount='23' />
        <Post message='Хорошо,  спасибо' likesCount='0' />
      </div>
    </div>
  );
};

export default MyPosts;
