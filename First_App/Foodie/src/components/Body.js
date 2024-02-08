import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State variable - super powerful variable.
  const [listOfVariables, setListOfVariables] = useState(resList)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfVariables.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfVariables(filterdList);
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {listOfVariables.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
