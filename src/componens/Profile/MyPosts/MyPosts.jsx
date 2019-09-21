import React from "react";
import s from "./MyPosts.module.css";
const MyPosts = () => {
  return (
    <div>
      <div>
        My post
        <div>new post</div>
        <div className={s.item}>post1</div>
        <div className={s.item}> post2</div>
        <div className="item"> post3</div>
        <div className="item"> post4</div>
      </div>
    </div>
  );
};

export default MyPosts;
