import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../store/spots";
import "./Comment.css";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session?.user?.id);
  const [body, setBody] = useState(comment.body);

  const editComment = () => {};
  const deleteComment = async () => {
    return await dispatch(deleteComment(comment.id, comment.spotId));
  };

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
      <div className="button-div">
        {user === comment.id ? (
          <>
            <div className="edit-delete-button" onClick={editComment}>
              Edit
            </div>
            <div className="edit-delete-button" onClick={deleteComment}>
              Delete
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Comment;
