import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { locationPopulate } from "../../store/locations";

const BenchIndex = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const located = useSelector((state) => state.locations);
  let keys;

  useEffect(() => {
    dispatch(locationPopulate()).then((req) => setIsLoaded(true));
  }, [dispatch]);
  if (isLoaded) {
    keys = Object.keys(located.locations);
  }

  return (
    isLoaded && (
      <div>
        {keys.map((el) => (
          <div>{located.locations[el].type}</div>
        ))}
      </div>
    )
  );
};

export default BenchIndex;
