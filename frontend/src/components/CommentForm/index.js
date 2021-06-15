import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newComment } from "../../store/spots";
import "./CommentForm.css";

const CommentForm = ({ spotId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.session?.user?.id);

  const submitComment = async (e) => {
    e.preventDefault();
    await dispatch(newComment(comment, spotId, user));
  };

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
        <button className="submit-button comment-button" type="submit">
          Submit
        </button>
      </form>
    </>
  ) : (
    ""
  );
};

export default CommentForm;
