import React, { useState } from "react";
import { useSelector } from "react-redux";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.session?.id);

  const submitComment = () => {};

  const updateComment = (e) => {
    setComment(e.target.value);
  };

  return user ? (
    <>
      <h2>Reviews</h2>
      <form className="comment-form" onSubmit={submitComment}>
        <textarea
          className="comment-area"
          onChange={updateComment}
          value={comment}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  ) : (
    ""
  );
};

export default CommentForm;
