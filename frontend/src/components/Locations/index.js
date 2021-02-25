import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { locationPopulate } from "../../store/locations";

const Locations = () => {
  const dispatch = useDispatch();
  const located = useSelector((state) => state.locations.locations);
  if (!located) {
    dispatch(locationPopulate());
  }
  console.log(located);
  return (
    <div>
      <div>{located.locations}</div>
    </div>
  );
};

export default Locations;
