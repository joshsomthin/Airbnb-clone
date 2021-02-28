import { NavLink } from "react-router-dom";
import "./CardFormat.css";
const CardFormat = ({ route, image, location, guests }) => {
  return (
    <NavLink to={route} className="places-card">
      <img src={image} />
      <div className="outer-text-div">
        <div className="inner-text-div">
          <div style={{ fontWeight: "700" }}>{location}</div>
          <div>{guests} guests</div>
        </div>
      </div>
    </NavLink>
  );
};

export default CardFormat;
