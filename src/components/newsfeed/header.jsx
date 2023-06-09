/** @format */

import React, { useState } from "react";
import backLogo from "../../assets/images/camera.jpeg";
import likesLogo from "../../assets/images/heart.png";
import myProfile from "../../assets/images/icon.jpeg";
import twitter from "../../assets/images/tit.jpeg";
import redheart from "../../assets/images/redheart.gif";
import "./header.css";
const Profile = () => {
  const [count, setcount] = useState(0);
  const handleChange = () => setcount(count + 1);
  const [heartactive, setHeartactive] = useState(false);
  return (
    <div className="hero_main">
      <div className="newshero_header">
        <div className="main">
          {" "}
          <img src={myProfile} alt="" />
          <div className="name">
            <p>
              <b> Reymond gale</b>
              <span>@reygale</span>
            </p>
            <p>Motion artist,MGX</p>
          </div>
        </div>
        <button>Viral</button>
      </div>

      <img src={backLogo} alt="" />

      <div className="content_main">
        <div className="content_one">
          <p>
            <b>NFT Photography peak time in george town</b>
          </p>
          <p>
            {" "}
            Be the first to get one of the 100+launch-NFTs in our newly launched
            Marketplace Beta! Get Me Here....
          </p>
        </div>
        <div className="content_two">
          <p>2Mins</p>
          <p>
            <b>93</b>views
          </p>
        </div>{" "}
      </div>

      <div className="tail">
        <div className="content_three">
          {!heartactive ? (
            <button
              onClick={() => {
                handleChange();
                setHeartactive(true);
              }}>
              {" "}
              <img src={likesLogo} alt="" />{" "}
            </button>
          ) : (
            <button>
              <img src={redheart} alt="heart" />
            </button>
          )}
          <p>
            <b>{count}</b> like
          </p>
        </div>

        <div className="tick">
          {" "}
          <img src={twitter} alt="" />
          <p>
            {" "}
            <b>12</b>Tweets
          </p>{" "}
        </div>
        <button>Add Tweet</button>
      </div>
    </div>
  );
};

export default Profile;
