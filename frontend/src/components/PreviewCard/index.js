import "./PreviewCard.css";
import { NavLink } from "react-router-dom";
const PreviewCard = ({ image }) => {
  return (
    <NavLink to="/">
      <div className="card">
        <div className="card-container">
          <div className="image-container">
            <div className="container">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="info-container">
              <div className="info-header">
                <span className="light">Full Size Home</span>
                <span className="dark">
                  The Rager House!!! What an absolute steal
                </span>
              </div>
              <div className="info-details light">
                <span>16 guests</span>
                <span> · </span>
                <span>4 bedrooms</span>
                <span> · </span>
                <span>3 bathrooms</span>
              </div>
              <div className="info-price">
                <span className="bold dark">$40</span>
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
