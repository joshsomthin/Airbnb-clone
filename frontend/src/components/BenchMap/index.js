import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const MapContainer = () => {
  const [selected, setSelected] = useState({});
  const key = process.env.REACT_APP_GOOGLE_MAPS_API;
  const mapStyles = {
    height: "80vh",
    width: "80%",
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
        <Marker
          onClick={(item) =>
            onSelect({
              name: "My Spot",
              location: { lat: 47.606880969482496, lng: -122.3339539210074 },
            })
          }
          key="Space Needle"
          position={{ lat: 47.606880969482496, lng: -122.3339539210074 }}
        >
          {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
