import React from "react";
import { useSelector } from "react-redux";
import Comment from "../Comment";

const CommentSection = () => {
  const comments = useSelector((state) => state.spots?.comments);
  return (
    <div>
      {comments.map((el, idx) => {
        return <Comment key={idx} comment={el} />;
      })}
    </div>
  );
};

export default CommentSection;
