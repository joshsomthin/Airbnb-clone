import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API;
  console.log(key);
  const mapStyles = {
    height: "80vh",
    width: "80%",
  };

  const defaultCenter = {
    lat: 47.6062,
    lng: -122.3321,
  };
  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
