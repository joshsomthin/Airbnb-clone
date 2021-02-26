import "./PreviewCard.css";
const PreviewCard = () => {
  return (
    <div
      className="card"
      style={{ height: "200px", margin: "10px", border: "dashed blue 1px" }}
    >
      <div className="card-container">
        <div className="container">
          <img src="https://image.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg" />
        </div>
        <div className="info-container">
          <div>
            <span>
              HomeType needs to take up the entire to portion of the card
            </span>
          </div>
          <div>
            <span>spot.body</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
