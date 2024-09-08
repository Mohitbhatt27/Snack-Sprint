import Card from "./Card";
import { FOODIMG } from "../utils/constants";
import { RESTAURANTS } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(RESTAURANTS);
  const filterHandler = () => {
    setRestaurantList(
      restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4)
    );
  };
  const allResHandler = () => {
    setRestaurantList(RESTAURANTS);
  };
  return (
    <div className="body">
      <div className="search-bar">SearchBar</div>
      <div className="filter">
        <button className="filter-btn" onClick={filterHandler}>
          Top rated Restaurants
        </button>
        <button className="allRes-btn" onClick={allResHandler}>
          List all Restaurants
        </button>
      </div>
      <div className="card-container">
        {restaurantList.map((restaurant) => (
          <Card
            name={restaurant.info.name}
            cusine={restaurant.info.cuisines.join(", ")}
            ratings={restaurant.info.avgRating}
            eta={restaurant.info.sla.deliveryTime}
            foodImg={FOODIMG + restaurant.info.cloudinaryImageId}
            key={restaurant.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
