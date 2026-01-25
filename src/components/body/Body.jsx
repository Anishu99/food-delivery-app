import { useState } from "react";
import { apiResponse, apiResponse1 } from "../../../utils/mock-data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let restaurantResponse =
    apiResponse1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  const [restaurantList, setRestaurantList] = useState(restaurantResponse);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            setRestaurantList(
              restaurantResponse.filter((res) => res.info.avgRating >= 4)
            );
          }}
          className="filter-btn"
        >
          Top Rated restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(restaurantResponse);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((resData) => {
          return (
            <RestaurantCard
              key={resData.info.id}
              response={resData}
            ></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
