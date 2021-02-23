import { NavLink } from "react-router-dom";
import "./Home.css";
import CardFormat from "../CardFormat/index";

const Home = () => {
  return (
    <div className="grid-container">
      <div className="background-img">
        <img src="https://a0.muscache.com/im/pictures/f0483d09-7d13-42d0-a40a-46d585c42220.jpg?im_w=1440" />
      </div>
      <div className="places-container">
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/signup"}
          width={"80px"}
          height={"80px"}
          image={
            "https://i.pinimg.com/originals/35/b8/6a/35b86a10b2611586bc454f8de3904b77.png"
          }
        />
      </div>
    </div>
  );
};

export default Home;
