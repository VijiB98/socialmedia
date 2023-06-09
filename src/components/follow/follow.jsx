/** @format */

import React from "react";

import tick from "../../assets/images/tick.jpeg";
import "./follow.css";
const Follow = () => {
  const Followlist = [
    {
      id: 1,
      Icon: tick,
      Name: "William ",
      Followers: "2M Followers",
      Bio: "Arist Motion graphics",
      Text: "Message",
      Followed: false,
      // Button: "Follow",
      // Click: "Unfollow",
    },
    {
      id: 2,
      Icon: tick,
      Name: "Gopi",
      Followers: "2M Followers",
      Bio: "Web Developer",
      Text: "Message",
      Followed: false,
      // Button: "Follow",
      // Click: "Unfollow",
    },
    {
      id: 3,
      Icon: tick,
      Name: "Ajith",
      Followers: "2M Followers",
      Bio: "Teacher",
      Text: "Message",
      Followed: false,
      // Button: "Follow",
      // Click: "Unfollow",
    },
    {
      id: 4,
      Icon: tick,
      Name: "Suresh",
      Followers: "2M Followers",
      Bio: "Doctor",
      Text: "Message",
      Followed: false,
      // Button: "Follow",
      // Click: "Unfollow",
    },
    {
      id: 5,
      Icon: tick,
      Name: "Ramesh",
      Followers: "2M Followers",
      Bio: "Hacker",
      Text: "Message",
      Followed: false,
      // Button: "Follow",
      // Click: "Unfollow",
    },
    {
      id: 6,
      Icon: tick,
      Name: "Guru",
      Followers: "2M Followers",
      Bio: "Web Designer",
      Text: "Message",
      Followed: false,
      // Button: "Follow",
      // Click: "Unfollow",
    },
  ];

  const [users, setUsers] = React.useState(Followlist);
  const Handlefollow = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((item) =>
        item.id === userId ? { ...item, Followed: !item.Followed } : item
      )
    );
  };

  const RenderFollow = users.map((item) => {
    return (
      <div className="follow_hero">
        <div className="follow_img"></div>
        <div className="follow_content">
          <div className="profile">
            <div className="profile_name">
              <img src={tick} alt="tick" />
              <h4>{item.Name}</h4>
            </div>
            <p>{item.Followers}</p>
          </div>
          <p>{item.Bio}</p>
          <div className="follow_button">
            <button id="message"> {item.Text}</button>
            <button onClick={() => Handlefollow(item.id)}>
              {item.Followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="card_hero">
        <div className="card_color">
          <div className="card_img"></div>
          <h1 id="follows">FOLLOW</h1>
        </div>
        <div className="cards">{RenderFollow}</div>
      </div>
    </React.Fragment>
  );
};
export default Follow;
