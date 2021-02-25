import "SpotMap.css";
import Spot from "../Spot";
// import "./SpotMap.css";
import { Loader } from "@googlemaps/js-api-loader";
const SpotMap = () => {
  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  return (
    <div id="map-container" ref="map">
      <div id="map"></div>
    </div>
  );
};

export default SpotMap;
