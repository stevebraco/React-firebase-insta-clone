import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageUrl}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="test"
          src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      <h4 className="post__text">
        <strong> {username}: </strong>{caption}
      </h4>
    </div>
  );
}

export default Post;
