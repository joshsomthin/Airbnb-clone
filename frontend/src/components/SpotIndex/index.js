import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSearchLocations } from "../../store/locations";
import MapContainer from "../MapContainer";
import PreviewCard from "../PreviewCard";
import "./SpotIndex.css";

const SpotIndex = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const located = useSelector((state) => state.locations);
  let passValues = [];

  useEffect(async () => {
    dispatch(getSearchLocations()).then((req) => setIsLoaded(true));
  }, [dispatch]);

  if (isLoaded) {
    console.log(located);
    located.search.map((el) => {
      passValues.push({
        id: el.spotId,
        name: el.Spot.body,
        type: el.type,
        spot: {
          price: el.Spot.price,
          image: el.Spot.Images[0].imageUrl,
        },
        location: {
          lat: parseFloat(el.latitude),
          lng: parseFloat(el.longitude),
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
