/** @format */

import React from "react";

import icon from "../../assets/images/tick.jpeg";
import "./profile.css";

const Media = () => {
  const Profile = [
    {
      Image: icon,
      Name: "William Cole",
      Designation: "Artist Motion gtaphics",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      id: 1,
      followed: false,
    },
    {
      Image: icon,
      Name: "Gopi",
      Designation: "Web Developer",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      id: 2,
      followed: false,
      // sumit: "Follow",
      // button: "Unfollow",
    },
    {
      id: 3,
      Image: icon,
      Name: "Ajith",
      Designation: "Teacher",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",

      followed: false,
      // sumit: "Follow",
      // button: "Unfollow",
    },
    {
      Image: icon,
      Name: "Suresh",
      Designation: "Doctor",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      id: 4,
      followed: false,
      // sumit: "Follow",
      // button: "Unfollow",
    },
    {
      Image: icon,
      Name: "Ramesh",
      Designation: "Hacker",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      id: 5,
      followed: false,
      // sumit: "Follow",
      // button: "Unfollow",
    },
    {
      id: 6,
      Image: icon,
      Name: "Guru",
      Designation: "Web Designer",
      Bio: "Be the first to get one of the 100+ launch.NFTs in our newly launched Marketplace Beat! Get Me Here",
      follers: "2M Followers",
      post: "43+posts",
      Msg: " Message",
      followed: false,

      // sumit: "Follow",
      // button: "Unfollow",
    },
  ];
  const [friends, setFriends] = React.useState(Profile);
  const Handlefriends = (friendId) => {
    setFriends((prevfriends) =>
      prevfriends.map((friendsitem) =>
        friendsitem.id === friendId
          ? { ...friendsitem, followed: !friendsitem.followed }
          : friendsitem
      )
    );
  };
  const renderMedia = friends.map((friendsitem) => {
    return (
      <div className="media_main">
        <div className="empty_image"></div>
        <div className="list">
          {" "}
          <div className="pic">
            {" "}
            <img src={friendsitem.Image} alt="" />
            <h1>{friendsitem.Name}</h1>
          </div>{" "}
          <p>{friendsitem.Designation}</p>
          <p>{friendsitem.Bio}</p>
          <h2>{friendsitem.follers}</h2>
          <div className="media_button">
            {" "}
            <p>{friendsitem.post}</p>
            <button>{friendsitem.Msg}</button>{" "}
          </div>{" "}
          <button onClick={() => Handlefriends(friendsitem.id)}>
            {friendsitem.followed ? "Unfollow" : "follow"}
          </button>
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
