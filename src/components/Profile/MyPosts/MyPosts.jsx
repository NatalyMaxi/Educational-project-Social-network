import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm } from 'redux-form'
import FormAddPost from '../../FormAddPost/FormAddPost';

const AddPostReduxForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(FormAddPost)

const MyPosts = (props) => {

  let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

  const onSubmit = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.myPosts}>
      <div className={classes.myPosts__item}>
        <h2 className={classes.myPosts__title}>My Post</h2>
        <AddPostReduxForm {...props} onSubmit={onSubmit} />
      </div>
      <div
        className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
