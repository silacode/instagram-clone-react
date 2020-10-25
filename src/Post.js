import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imgURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        {/*header -> avatar + username */}
        <h3>{username}</h3>
      </div>

      {/* {image} */}
      <img className="post__Image" src={imgURL} alt="" />

      {/* username + caption */}
      <h3 className="post__Text">
        <strong>{username}</strong> {caption}
      </h3>
    </div>
  );
}

export default Post;
