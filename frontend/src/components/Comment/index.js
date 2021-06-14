import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Comment.css";

const Comment = ({ comment }) => {
  const user = useSelector((state) => state.session?.user?.id);
  const [body, setBody] = useState(comment.body);
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
      <span>{body}</span>
      <div>{user === comment.id ? <button>Edit</button> : ""}</div>
    </div>
  );
};

export default Comment;
