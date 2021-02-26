import BenchIndex from "../BenchIndex";
import BenchMap from "../BenchMap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationPopulate } from "../../store/locations";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <BenchIndex />
    </div>
  );
};

export default Search;
