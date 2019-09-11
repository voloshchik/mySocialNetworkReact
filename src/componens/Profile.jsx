import React from "react";
import s from  "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2018/06/07/04/48/shanghai-3459422__340.jpg"
          alt=""
        />
      </div>
      <div>ava+description</div>
      <div>
        My post
        <div>new post</div>
      </div>
      <div className="item">post1</div>
      <div className="item"> post2</div>
    </div>
  );
};

export default Profile;
