import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { locationPopulate } from "../../store/locations";
import { getSearchLocations } from "../../store/locations";
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
    dispatch(getSearchLocations());
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
          {located.search.map((search, idx) => (
            <PreviewCard key={idx} search={search} />
          ))}
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
