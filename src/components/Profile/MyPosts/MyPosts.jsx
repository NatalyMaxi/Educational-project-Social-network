import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <div>
        <textarea className={classes.myPosts__input}></textarea>
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
