import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
  { id: 1, message: 'Blabla', likesCount: '3' },
  { id: 2, message: 'Hi', likesCount: '23' },
  { id: 3, message: 'Axaxa', likesCount: '3' },
  { id: 4, message: 'Yo', likesCount: '0' },
]

let postsElements = posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <div className={classes.myPosts__item}>
        <h2 className={classes.myPosts__title}>My Post</h2>
        <textarea className={classes.myPosts__input} placeholder='Enter a message'></textarea>
        <button className={classes.myPosts__button}>Add post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
