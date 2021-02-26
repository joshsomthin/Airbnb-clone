import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { locationPopulate } from "../../store/locations";
import { spots } from "../../store/spots";
import MapContainer from "../MapContainer";
import PreviewCard from "../PreviewCard";
import "./SpotIndex.css";

const SpotIndex = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const located = useSelector((state) => state.locations);
  const spots = useSelector((state) => state.spots);
  let keys;
  let passValues = [];

  useEffect(() => {
    dispatch(locationPopulate()).then((req) => setIsLoaded(true));
    return function cleanup() {};
  }, [dispatch]);
  if (isLoaded) {
    keys = Object.keys(located.locations);
    keys.map((el) => {
      passValues.push({
        type: located.locations[el].type,
        location: {
          lat: parseFloat(located.locations[el].latitude),
          lng: parseFloat(located.locations[el].longitude),
        },
      });
    });
  }

  return (
    isLoaded && (
      <div className="box-container">
        <div className="cards-container">
          <PreviewCard
            image={
              "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/675f4ced-121c-432e-8556-26b824f3cf04/d31ryq-e86afbaa-8f18-45cb-b055-8f12c72afc00.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjc1ZjRjZWQtMTIxYy00MzJlLTg1NTYtMjZiODI0ZjNjZjA0XC9kMzFyeXEtZTg2YWZiYWEtOGYxOC00NWNiLWIwNTUtOGYxMmM3MmFmYzAwLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.vNqaFVF7t9bEkHU-p5XDyg1EMmINdmKh3vP7grWh_Iw"
            }
          />
          <PreviewCard
            image={
              "https://us.123rf.com/450wm/vincentstthomas/vincentstthomas1608/vincentstthomas160800002/64205740-a-beautiful-new-house-on-a-hill-in-canada-.jpg?ver=6"
            }
          />
          <PreviewCard
            image={
              "https://st2.depositphotos.com/3536505/11698/i/600/depositphotos_116989200-stock-photo-elegant-english-house-with-red.jpg"
            }
          />
          <PreviewCard
            image={
              "https://media.gettyimages.com/photos/dream-home-luxury-house-success-picture-id848549286?s=612x612"
            }
          />
          <PreviewCard
            image={
              "https://image.shutterstock.com/image-illustration/3d-digital-illustration-house-elevation-260nw-1727803153.jpg"
            }
          />
          <div style={{ height: "100px", width: "100px" }}></div>
        </div>
        <MapContainer
          style={{ position: "fixed", top: "0" }}
          coordinates={passValues}
        />
      </div>
    )
  );
};

export default SpotIndex;
