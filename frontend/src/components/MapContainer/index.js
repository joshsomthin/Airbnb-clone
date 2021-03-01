import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MapContainer = ({ coordinates }) => {
  const [selected, setSelected] = useState({});
  const key = process.env.REACT_APP_GOOGLE_MAPS_API;
  const mapStyles = {
    height: "90vh",
    width: "55%",
  };

  const defaultCenter = {
    lat: 47.6062,
    lng: -122.3321,
  };

  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
        {coordinates.map((item) => {
          return (
            <Marker
              onClick={(item) => onSelect(item)}
              key={item.type}
              position={item.location}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>here</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
