import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2018/06/07/04/48/shanghai-3459422__340.jpg"
          alt=""
        />
      </div>

      <MyPosts />
    </div>
  );
};

export default Profile;
