import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State variable - super powerful variable.
  const [listOfVariables, setListOfVariables] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await info.json();
    setListOfVariables(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfVariables.length === 0) {
    return <Shimmer />;
  }
  console.log("Rahul");
  return listOfVariables.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant card and update the UI
              const filteredRestaurant = listOfVariables.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setListOfVariables(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfVariables.filter(
              (res) => res.info.avgRating >= 4.5
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
