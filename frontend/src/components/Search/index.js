import BenchIndex from "../BenchIndex";
import BenchMap from "../BenchMap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationPopulate } from "../../store/locations";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(locationPopulate()).then((req) => setIsLoaded(true));
  }, [dispatch]);
  return (
    <div className="box-container">
      <div>
        <BenchIndex />
      </div>
      <BenchMap />
    </div>
  );
};

export default Search;
