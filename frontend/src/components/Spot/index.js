import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { spots, reservations, comments } from "../../store/spots";
import LoginFormModal from "../LoginFormModal";
import "./Spot.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CommentForm from "../CommentForm";
import CommentSection from "../CommentSection";
import ReservationCalendar from "../ReservationCalendar";

const Spot = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const sessionSpot = useSelector((state) => state.spots?.spot);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(spots({ spotId }))
      .then(() => dispatch(comments(spotId)))
      .then(() => setIsLoaded(true));
    return function cleanup() {};
  }, []);

  return (
    isLoaded && (
      <div className="spot-container">
        <div>
          <h2 className="title">{sessionSpot.body}</h2>
        </div>
        <div className="images-container">
          <div id={"first"} key={0}>
            <img src={sessionSpot.Images[0].imageUrl} />
          </div>
          <div className="other-images">
            {sessionSpot.Images.map((image, idx) => {
              if (idx === 0) {
                return;
              }
              return (
                <div className="house-image" id={idx} key={idx}>
                  <img src={image.imageUrl} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="house-info">
          <div className="hosted-by">
            <div className="host-details">
              <div style={{ fontSize: "25px" }}>
                Entire {sessionSpot.Home.type} hosted by{" "}
                {sessionSpot.User.firstName}
              </div>
              <div>
                <div>
                  {sessionSpot.Home.guest} guests {sessionSpot.Home.bed} bed{" "}
                  {sessionSpot.Home.bath} bath
                </div>
              </div>
            </div>
            <div className="profile-pic ">
              <img
                src={sessionSpot.User.profilePic}
                style={{ height: "60px", width: "60px", borderRadius: "50%" }}
              />
            </div>
            <div className="body-text">{sessionSpot.description}</div>
          </div>
          <div>
            <ReservationCalendar spotId={spotId} price={sessionSpot.price} />
          </div>
        </div>
        <CommentForm spotId={spotId} />
        <CommentSection spotId={spotId} />
      </div>
    )
  );
};

export default Spot;
