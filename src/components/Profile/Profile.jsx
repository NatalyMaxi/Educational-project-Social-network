import React from "react";
import classes from "./Profile.module.css";
import blackcat from "../../images/blackCat-min.png";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img
          className={classes.profile__img}
          src={blackcat}
          alt="Картинка черного кота"
        />
      </div>
      <div className={classes.profile__post}>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
