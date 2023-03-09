import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
   let state = props.store.getState().profilePage

   let addPost = () => {
      let action = addPostCreator()
      props.store.dispatch(action)
   }

   let onPostChange = (text) => {
      let action = updateNewPostTextCreator(text)
      props.store.dispatch(action)
   }

   return (<MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      profilePage={state}
   />)
}

export default MyPostsContainer;