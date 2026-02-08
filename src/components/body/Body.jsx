import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {
  API_URL_FOR_FETCH_RESTAURANT_LIST,
  API_URL_FOR_RESTAURANT_LIST_UPDATE,
} from "../../../utils/constant";
import { RestaurantSkeleton } from "./RestaurantSkeleton";
import { Link } from "react-router-dom";

const Body = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const api_response = await fetch(API_URL_FOR_FETCH_RESTAURANT_LIST);
    const data_to_json = await api_response.json();
    let restaurantResponse =
      data_to_json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantResponse);
    setFilteredRestaurantList(restaurantResponse);
  };

  return restaurantList.length === 0 ? (
    <RestaurantSkeleton />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurantList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            );
            setFilteredRestaurantList(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setFilteredRestaurantList(
              filteredRestaurantList.filter((res) => res.info.avgRating >= 4.5)
            );
          }}
          className="filter-btn"
        >
          Top Rated restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurantList.map((resData) => {
          return (
            <Link key={resData.info.id} to={"/restaurant/" + resData.info.id}>
              <RestaurantCard response={resData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
