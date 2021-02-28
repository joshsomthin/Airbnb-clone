import { NavLink } from "react-router-dom";
import "./CardFormat.css";
const CardFormat = ({ route, image, location }) => {
  return (
    <NavLink to={route} className="places-card">
      <img src={image} />
      <div>{location}</div>
    </NavLink>
  );
};

export default CardFormat;
