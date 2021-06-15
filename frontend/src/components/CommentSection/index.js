import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { comments } from "../../store/spots";
import Comment from "../Comment";

const CommentSection = ({ spotId }) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const comment = useSelector((state) => state.spots?.comments);

  useEffect(() => {
    dispatch(comments(spotId)).then(() => setIsLoaded(true));
  }, []);
  return (
    isLoaded && (
      <div>
        {comment.map((el, idx) => {
          return <Comment key={idx} comment={el} />;
        })}
      </div>
    )
  );
};

export default CommentSection;
