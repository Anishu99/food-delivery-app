import { IMAGE_BASE_URL } from "../../../utils/constant";

const RestaurantCard = (props) => {
  const { response } = props;
  const {
    name,
    avgRating,
    sla,
    costForTwo,
    cuisines,
    cloudinaryImageId,
    areaName,
  } = response.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={IMAGE_BASE_URL + cloudinaryImageId}
        alt="image"
      ></img>
      <div className="card-heading">
        <h3 className="restaurant-name">{name}</h3>
        <div className="description">
          <h5>{avgRating} stars</h5>
          <h5>{sla.deliveryTime} minutes</h5>
          <h5>{costForTwo}</h5>
        </div>
        <div className="restaurant-description">{cuisines.join(", ")}</div>
        <div className="restaurant-description">{areaName.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
