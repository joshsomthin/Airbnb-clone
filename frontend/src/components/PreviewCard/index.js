import "./PreviewCard.css";
import { NavLink } from "react-router-dom";

const PreviewCard = ({ search }) => {
  return (
    <NavLink to={`/spots/${search.spotId}`}>
      <div className="card">
        <div className="card-container">
          <div className="image-container">
            <div className="container">
              <img src={search.Spot.Images[0].imageUrl} />
            </div>
          </div>
          <div>
            <div className="info-container">
              <div className="info-header">
                <span className="light">{search.type}</span>
                <span className="dark">{search.Spot.body}</span>
              </div>
              <div className="info-details light">
                <span>{search.guest} guests</span>
                <span> · </span>
                <span>{search.bed} beds</span>
                <span> · </span>
                <span>{search.bath} bathrooms</span>
              </div>
              <div className="info-price">
                <span className="bold dark">${search.Spot.price}</span>
                <span>/ night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default PreviewCard;
