import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {
  API_URL_FOR_FETCH_RESTAURANT_LIST,
  API_URL_FOR_RESTAURANT_LIST_UPDATE,
} from "../../../utils/constant";
import { RestaurantSkeleton } from "./RestaurantSkeleton";

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

  const getMoreRestaurantList = async () => {
    const api_response = await fetch(API_URL_FOR_RESTAURANT_LIST_UPDATE, {
      method: "POST",

      body: JSON.stringify({
        lat: 30.68723285843476,
        lng: 76.69283905508495,
        nextOffset: "CJhlELQ4KICYgc/w7+eaBTCnEzgD",
        widgetOffset: {
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "144",
          inlineFacetFilter: "",
          restaurantCountWidget: "",
        },
        filters: {},
        seoParams: {
          seoUrl: "https://www.swiggy.com/restaurants",
          pageType: "FOOD_HOMEPAGE",
          apiName: "FoodHomePage",
          businessLine: "FOOD",
        },
        page_type: "DESKTOP_WEB_LISTING",
        _csrf: "thFWxTguvMkl-Tjp7NWlNwsDsPphIq19m1PDelew",
      }),
    });
    //  const json_response = await api_response.json();
    console.log("JSON,", api_response);
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
            <RestaurantCard
              key={resData.info.id}
              response={resData}
            ></RestaurantCard>
          );
        })}
      </div>
      <button onClick={getMoreRestaurantList}>Get More Restaurants</button>
    </div>
  );
};

export default Body;
