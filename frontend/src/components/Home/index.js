import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./Home.css";
import CardFormat from "../CardFormat/index";
import { getSearchLocations } from "../../store/locations";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const located = useSelector((state) => state.locations);
  // console.log(located.search[0]);

  useEffect(() => {
    dispatch(getSearchLocations()).then((req) => setIsLoaded(true));
  }, [dispatch]);

  const images = [
    "https://a0.muscache.com/im/pictures/c2eba2e9-0d80-4704-9e2c-34ac16316c53.jpg",
    "https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg",
    "https://a0.muscache.com/im/pictures/08b33515-49eb-4b9b-8e60-f962fb7e700b.jpg",
    "https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg",
    "https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg",
    "https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg",
    "https://a0.muscache.com/im/pictures/8d12e283-00e1-4365-9b6d-e578f75aab23.jpg",
    "https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg",
  ];
  return (
    isLoaded && (
      <div className="grid-container">
        <div>
          <div>
            <div className="background-img">
              <div style={{ zIndex: 1, position: "absolute" }}>
                Checking to see if working
              </div>
              <img src="https://a0.muscache.com/im/pictures/f0483d09-7d13-42d0-a40a-46d585c42220.jpg" />
            </div>
          </div>
        </div>
        <div
          className="dark"
          style={{ padding: "10px", paddingLeft: "80px", fontWeight: "700" }}
        >
          Recently Added Spots
        </div>
        <div className="places-container">
          {images.map((el, idx) => (
            <CardFormat
              key={idx}
              location={located.search[idx].type}
              route={`/spots/${located.search[idx].spotId}`}
              image={images[idx]}
              guests={located.search[idx].guest}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Home;
