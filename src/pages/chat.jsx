/** @format */
import React from "react";
import "./chat.css";
import Chat from "../components/chats/chats";
import Messge from "../components/message/message";

const Friendschat = () => {
  return (
    <div className="recent_chat">
      <Chat />
      <Messge />
    </div>
  );
};
export default Friendschat;
