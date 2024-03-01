import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State variable - super powerful variable.
  const [listOfVariables, setListOfVariables] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await info.json();
    console.log(json)
    setListOfVariables(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1> OOOPS...! You are Offline. Please check your internet connction.</h1>
    );
  }

  if (listOfVariables.length === 0) {
    return <Shimmer />;
  }
  return listOfVariables.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search mx-4 px-4">
          <input
            className="search-box border border-solid border-black rounded-3xl p-1"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-pink-100 m-4 rounded-3xl"
            onClick={() => {
              //Filter the restaurant card and update the UI
              const filteredRestaurant = listOfVariables.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-pink-100 m-4 rounded-3xl"
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
      </div>
      <div className="res-container flex flex-wrap justify-start">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
