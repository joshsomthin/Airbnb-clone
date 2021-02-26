import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { locationPopulate } from "../../store/locations";
import MapContainer from "../MapContainer";
import PreviewCard from "../PreviewCard";
import "./SpotIndex.css";

const SpotIndex = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const located = useSelector((state) => state.locations);
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
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </div>
        <MapContainer coordinates={passValues} />
      </div>
    )
  );
};

export default SpotIndex;
