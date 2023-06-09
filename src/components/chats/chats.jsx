/** @format */
import React from "react";
import userone from "../../assets/images/imageone.png";
import usertwo from "../../assets/images/imagetwo.jpg";
import userthree from "../../assets/images/imagethree.jpeg";
import userfour from "../../assets/images/imagefour.jpeg";
import userfive from "../../assets/images/imagefive.png";
import usersix from "../../assets/images/imagesix.jpeg";

import "./chats.css";
const Chat = () => {
  const Chatlist = [
    {
      Icon: userone,
      Name: "William",
      Job: "Artist",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit.Doner dolor tellus ut lacinia...",
    },
    {
      Icon: usertwo,
      Name: "Gopi",
      Job: "Web Developer",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit.Doner dolor tellus ut lacinia...",
    },
    {
      Icon: userthree,
      Name: "Ajith",
      Job: "Teacher",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit.Doner dolor tellus ut lacinia...",
    },

    {
      Icon: userfour,
      Name: "Suresh",
      Job: "Doctor",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit.Doner dolor tellus ut lacinia...",
    },
    {
      Icon: userfive,
      Name: "Ramesh",
      Job: "Hacker",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit.Doner dolor tellus ut lacinia...",
    },
    {
      Icon: usersix,
      Name: "Guru",
      Job: "Web Developer",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit.Doner dolor tellus ut lacinia...",
    },
  ];
  const RenderChat = Chatlist.map((chatype) => {
    return (
      <div className="chat_main">
        <div className="chat_image">
          <img src={chatype.Icon} alt="" />
        </div>
        <div className="chat_content">
          <div className="chat_name">
            <h2>{chatype.Name}</h2>
            <p>{chatype.Job}</p>
          </div>
          <p>{chatype.Bio}</p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="chat_hero">
        <h1>Recent Chats</h1>
        <div className="chat_card">{RenderChat}</div>
      </div>
    </React.Fragment>
  );
};
export default Chat;
