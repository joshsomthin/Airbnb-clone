import React from "react";
import { useSelector } from "react-redux";
import Comment from "../Comment";

const CommentSection = () => {
  const comments = useSelector((state) => state.spots?.spot?.Reviews);
  return (
    <div>
      {comments.map((el, idx) => {
        return <Comment key={idx} text={el.body} />;
      })}
    </div>
  );
};

export default CommentSection;
