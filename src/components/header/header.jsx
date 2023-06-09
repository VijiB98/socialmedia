/** @format */
import React, { useState } from "react";
import search from "../../assets/images/search.jpeg";
import message from "../../assets/images/msg.jpeg";
import add from "../../assets/images/plus.jpeg";
import ham from "../../assets/icons/hamburger.svg";
import cancel from "../../assets/icons/cancel.svg";
import "./header.css";
import Creatpost from "../addpost/addpost";
import { Link } from "react-router-dom";
const Header = () => {
  const [addPostOpen, setAddpostopen] = useState(false);
  const [sidebarOn, setSidebarOn] = useState(false);
  const hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={ham}
          alt="hamicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="closeicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(false);
          }}
        />
      )}
    </>
  );
  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">wall</Link>
        <Link to="/friends">friends</Link>
        <Link to="/friendschat">Chats</Link>
      </div>
    </div>
  );
  return (
    <div className="hero_header">
      <h1>Socialnetwork</h1>
      <div className="image">
        <input type="search" placeholder="search" required />
        <button>
          <img src={search} alt="space" />{" "}
        </button>
      </div>
      <div className="head_links">
        <Link to="/">wall</Link>
        <Link to="/friends">friends</Link>
        <Link to="/friendschat">
          <img src={message} alt="message" />
        </Link>
      </div>
      <button onClick={() => setAddpostopen(true)}>
        <img src={add} alt="add" />
        createposts
      </button>
      {hamburger}
      {sidebarOn && sidebar}
      <div className="logout_button">
        {" "}
        <button>Logout</button>
      </div>
      <Creatpost trigger={addPostOpen} setTrigger={setAddpostopen} />
    </div>
  );
};
export default Header;
