import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  /**Отрисовываем посты
   *
   */
  let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  /** добавим пост по клику на кнопку
   * 
   */
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
  }

  return (
    <div className={classes.myPosts}>
      <div className={classes.myPosts__item}>
        <h2 className={classes.myPosts__title}>My Post</h2>
        <textarea className={classes.myPosts__input} ref={newPostElement} placeholder='Enter a message' />
        <button className={classes.myPosts__button} onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
