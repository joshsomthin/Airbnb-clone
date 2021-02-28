import "./Home.css";
import CardFormat from "../CardFormat/index";

const Home = () => {
  return (
    <div className="grid-container">
      <div>
        <div>
          <div className="background-img">
            <div style={{ zIndex: 1, position: "absolute" }}>
              Checking to see if working
            </div>
            <img src="https://a0.muscache.com/im/pictures/f0483d09-7d13-42d0-a40a-46d585c42220.jpg?im_w=1440" />
          </div>
        </div>
      </div>
      <div className="places-container">
        <CardFormat
          location={"Ocean Shores"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/c2eba2e9-0d80-4704-9e2c-34ac16316c53.jpg"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/08b33515-49eb-4b9b-8e60-f962fb7e700b.jpg"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/8d12e283-00e1-4365-9b6d-e578f75aab23.jpg"
          }
        />
        <CardFormat
          location={"Ocean Shores"}
          classes={"places-card"}
          route={"/spots/1"}
          image={
            "https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
