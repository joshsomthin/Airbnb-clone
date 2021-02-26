import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "80vh",
    width: "80%",
  };

  const defaultCenter = {
    lat: 47.6062,
    lng: -122.3321,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCbHb4peQn9hsuGjcqXNbA_z-Ox3QOPQEU">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
