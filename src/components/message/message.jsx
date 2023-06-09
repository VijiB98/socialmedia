/** @format */

import React from "react";
import tick from "../../assets/images/tick.jpeg";
import "./message.css";
const Messge = () => {
  return (
    <div className="heromessage_chat">
      <div className="profile_hero">
        <img src="" alt="" />
        <div className="profile_image">
          <img src={tick} alt="tick" />
          <h1>William</h1>
        </div>
        <p id="bio">Artist, Motion,graphics</p>
        <p>
          "Be the first to get one of the 100+ launch-NFTs in our newly launched
          Marketplace Betal Get Me Here"
        </p>
        <h4>2M Followers</h4>
        <div className="profile_post">
          <p>43+posts</p>
          <button id="message">Message</button>
        </div>
        <button id="follow">Follow</button>
      </div>{" "}
      <div className="message_main">
        <div className="message_content">
          Don't think about making art, just get it done. Let everyone else
          decide if it's good or bad, whether they love it. While they are
          deciding,make even more art.
        </div>
        <div className="message_box">
          I found I could say things with color and shapes that I couldn't say
          any other way-things I had no words for.
        </div>
        <div className="message_content">
          Imagination is the beginnning of creation. you imagine what you
          desire, you will what you imagine, and at last, you creat what you
          will.
        </div>
        <div className="message_button">
          <input type="text" placeholder="messge" />
          <button id="send"> Send</button>
        </div>
      </div>
    </div>
  );
};
export default Messge;
