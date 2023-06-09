/** @format */

import React from "react";

import icon from "../../assets/images/tick.jpeg";
import "./profile.css";

const Media = () => {
  const [state, setState] = React.useState(false);
  const Profile = [
    {
      Image: icon,
      Name: "William Cole",
      Designation: "Artist Motion gtaphics",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      sumit: "Follow",
      button: "Unfollow",
    },
    {
      Image: icon,
      Name: "Gopi",
      Designation: "Web Developer",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      sumit: "Follow",
      button: "Unfollow",
    },
    {
      Image: icon,
      Name: "Ajith",
      Designation: "Teacher",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      sumit: "Follow",
      button: "Unfollow",
    },
    {
      Image: icon,
      Name: "Suresh",
      Designation: "Doctor",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      sumit: "Follow",
      button: "Unfollow",
    },
    {
      Image: icon,
      Name: "Ramesh",
      Designation: "Hacker",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      sumit: "Follow",
      button: "Unfollow",
    },
    {
      Image: icon,
      Name: "Guru",
      Designation: "Web Designer",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      sumit: "Follow",
      button: "Unfollow",
    },
  ];
  const renderMedia = Profile.map((Medialist) => {
    return (
      <div className="media_main">
        <div className="empty_image"></div>
        <div className="list">
          {" "}
          <div className="pic">
            {" "}
            <img src={Medialist.Image} alt="" />
            <h1>{Medialist.Name}</h1>
          </div>{" "}
          <p>{Medialist.Designation}</p>
          <p>{Medialist.Bio}</p>
          <h2>{Medialist.follers}</h2>
          <div className="media_button">
            {" "}
            <p>{Medialist.post}</p> <button>{Medialist.Msg}</button>{" "}
          </div>{" "}
          {!state ? (
            <button id="click" onClick={() => setState(true)}>
              {Medialist.sumit}
            </button>
          ) : (
            <button id="click" onClick={() => setState(false)}>
              {Medialist.button}
            </button>
          )}
          {""}
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="Social_media">{renderMedia}</div>
    </React.Fragment>
  );
};
export default Media;
