import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../store/spots";
import "./Comment.css";

const Comment = ({
  commentId,
  spotId,
  comment,
  userId,
  profilePic,
  username,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session?.user?.id);
  const [body, setBody] = useState(comment);

  const editComment = () => {};
  const removeComment = async () => {
    await dispatch(deleteComment(commentId, spotId));
  };

  return (
    <div className="comment">
      <div className="comment-user-info">
        <img
          className="comment-user-image"
          style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          src={profilePic}
        ></img>
        <h5>{username}</h5>
      </div>
      <span>{comment}</span>
      <div className="button-div">
        {user === userId ? (
          <>
            <div className="edit-delete-button" onClick={editComment}>
              Edit
            </div>
            <div className="edit-delete-button" onClick={removeComment}>
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
