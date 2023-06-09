/** @format */

import React from "react";
import "./wall.css";
import Viewprofile from "../components/socialwork/profilework";
import News from "../components/news/news";
import Profile from "../components/newsfeed/header";
import Follow from "../components/follow/follow";
const Wall = () => {
  return (
    <div className="wall_heropage">
      <div className="wall_mainpage">
        <Viewprofile />
        <News />
      </div>
      <div>
        <Profile />
        <Profile />
      </div>
      <Follow />
    </div>
  );
};
export default Wall;
