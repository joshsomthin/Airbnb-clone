import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./MapContainer.css";

const MapContainer = ({ coordinates }) => {
  const [selected, setSelected] = useState({});
  const key = process.env.REACT_APP_GOOGLE_MAPS_API;
  const mapStyles = {
    height: "100vh",
    width: "55%",
  };

  const defaultCenter = {
    lat: 47.6062,
    lng: -122.3321,
  };

  const onSelect = (item) => {
    setSelected(item);
  };
  console.log(coordinates);
  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
        {coordinates.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <a href={`/spots/${selected.id}`}>
              <div className="outer-marker">
                <div className="marker-card">
                  <img src={selected.spot.image} />
                </div>
                <div className="deets-div">
                  <div>
                    <span>{selected.type}</span>
                  </div>
                  <div>
                    <span>{selected.name}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "600" }}>
                      {selected.spot.price}
                    </span>
                    <span>/night</span>
                  </div>
                </div>
              </div>
            </a>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
