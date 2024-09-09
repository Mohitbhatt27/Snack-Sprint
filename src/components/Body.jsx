import Card from "./Card";
import { FOODIMG } from "../utils/constants";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.908877821658663&lng=80.97121808677912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const JSONdata = await data.json();
    setRestaurantList(JSONdata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const filterHandler = () => {
    setRestaurantList(
      restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4)
    );
  };
  return (
    <div className="body">
      <div className="search-bar">SearchBar</div>
      <div className="filter">
        <button className="filter-btn" onClick={filterHandler}>
          Top rated Restaurants
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

// data -> cards[4] -> card -> card -> card -> gridElements -> infoWithStyle ->restaurants -> 8elem-> each elem info