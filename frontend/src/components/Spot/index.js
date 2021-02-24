import React, { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { spots } from "../../store/spots";
import "./Spot.css";

const Spot = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.spots);
  console.log(sessionUser);

  useEffect(() => {
    dispatch(spots({ spotId })).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <div className="spot-container">
        <div>
          <h2 className="title">{sessionUser.spot.body}</h2>
        </div>
        <div className="images-container">
          {sessionUser.spot.Images.map((image) => {
            return (
              <div>
                <img
                  src={image.imageUrl}
                  style={{ height: "240px", width: "240px" }}
                />
              </div>
            );
          })}
        </div>
        <div className="house-info">
          <div className="hosted-by">
            <div className="host-details">
              <div style={{ fontSize: "25px" }}>
                Entire {sessionUser.spot.Home.type} hosted by{" "}
                {sessionUser.spot.User.firstName}
              </div>
              <div>
                <div>
                  {sessionUser.spot.Home.guest} guests{" "}
                  {sessionUser.spot.Home.bed} bed {sessionUser.spot.Home.bath}{" "}
                  bath
                </div>
              </div>
            </div>
            <div className="profile-pic ">
              <img
                src={sessionUser.spot.User.profilePic}
                style={{ height: "60px", width: "60px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Spot;
