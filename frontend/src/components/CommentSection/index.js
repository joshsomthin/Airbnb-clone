import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { comments } from "../../store/spots";
import Comment from "../Comment";

const CommentSection = ({ spotId }) => {
  const comment = useSelector((state) => state.spots?.comments);

  useEffect(() => {}, [comment]);
  return (
    <div>
      {comment.map((el, idx) => {
        return (
          <Comment
            key={idx}
            spotId={el.spotId}
            commentId={el.id}
            comment={el.body}
            userId={el.userId}
            username={el.User.username}
            profilePic={el.User.profilePic}
          />
        );
      })}
    </div>
  );
};

export default CommentSection;
