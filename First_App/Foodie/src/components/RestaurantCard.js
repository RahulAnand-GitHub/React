import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div
      className="res-card m-3 p-4 w-64 rounded-lg bg-gray-100 hover:bg-gray-200"
      
    >
      <img
        className="restaurant-logo rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold text-center py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
