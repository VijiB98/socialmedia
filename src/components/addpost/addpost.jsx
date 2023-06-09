/** @format */

import React, { useState } from "react";
import "./addpost.css";
import close from "../../assets/images/cross.jpeg";

const Creatpost = (props) => {
  const [imgDisplay, uploadImage] = useState([]);
  const imageFolder = (e) => {
    if (e.target.files.length !== 0) {
      uploadImage((imgDisplay) => [
        ...imgDisplay,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return props.trigger ? (
    <div className="creat_main">
      <div className="hero_creat">
        <div className="post">
          <h1>Creat a post</h1>
          <div className="but">
            <h2>Image Preview</h2>
            {imgDisplay.map((elem) => {
              return (
                <span key={elem}>
                  <img src={elem} alt="image" />
                </span>
              );
            })}
            <input type="file" onChange={imageFolder} required />
          </div>
        </div>
        <div className="footer">
          <form>
            <div className="title">
              {" "}
              <input type="text" placeholder="Title" required />
            </div>
            <div className="des">
              {" "}
              <textarea
                cols="30"
                rows="10"
                placeholder="Description goes here"
                required></textarea>
            </div>
            <div className="feed">
              {" "}
              <button>Add post to feed</button>
            </div>
          </form>
        </div>
      </div>
      <button onClick={() => props.setTrigger(false)}>
        <img src={close} alt="close" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default Creatpost;
