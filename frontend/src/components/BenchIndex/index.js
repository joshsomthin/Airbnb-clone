import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { locationPopulate } from "../../store/locations";
import MapContainer from "../BenchMap";
import "./BenchIndex.css";

const BenchIndex = () => {
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
          {keys.map((el) => {
            return (
              <div style={{ display: "flex", width: "100%" }} key={el}>
                {located.locations[el].type}
              </div>
            );
          })}
        </div>
        <MapContainer coordinates={passValues} />
      </div>
    )
  );
};

export default BenchIndex;
