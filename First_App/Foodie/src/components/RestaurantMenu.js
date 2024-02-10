import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  const { name } = resInfo?.cards[0]?.card?.card?.info;
  console.log(name);

  return resInfo === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} :{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
    </div>
  );
};

export default RestaurantMenu;
