import { NavLink } from "react-router-dom";
import "./CardFormat.css";
const CardFormat = ({ route, image, width, height, classes, location }) => {
  return (
    <NavLink to={route} className={classes}>
      <img style={{ width: width, height: height }} src={image} />
      <div>{location}</div>
    </NavLink>
  );
};

export default CardFormat;
