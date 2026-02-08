import { useEffect, useState } from "react";
import { Restaurant_Data } from "../../assets/restaurant-data";
import { SkeletonCard } from "./RestaurantSkeleton";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [foodCategoryOptions, setFoodCategoryOptions] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = Restaurant_Data;
    setResInfo(data);
    setFoodCategoryOptions(
      resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]
        ?.card?.card?.categories || []
    );
  };

  //   const name = "anis";
  //   let costForTwoMessage = "234";
  //   let cuisines = ["a", "b"];
  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  return resInfo === null ? (
    <SkeletonCard />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(",")}</h3>

      <h2>Menu</h2>
      <ul>
        {foodCategoryOptions?.map((categoryObj) =>
          categoryObj?.itemCards?.map((ele) => (
            <li key={ele.card.info.id}>{ele.card.info.name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
