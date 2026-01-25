import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL_FOR_FETCH_RESTAURANT_LIST } from "../../../utils/constant";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(API_URL_FOR_FETCH_RESTAURANT_LIST);
    const data_to_json = await data.json();
    let restaurantResponse =
      data_to_json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantResponse);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.info.avgRating >= 4.5)
            );
          }}
          className="filter-btn"
        >
          Top Rated restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            fetchRestaurantList();
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
