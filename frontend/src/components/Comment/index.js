import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-user-info">
        <img
          className="comment-user-image"
          style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          src={comment.User.profilePic}
        ></img>
        <h5>{comment.User.username}</h5>
      </div>
      <span>{comment.body}</span>
    </div>
  );
};

export default Comment;
