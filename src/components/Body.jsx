import Card from "./Card";
import Shimmer from "./Shimmer";
import { FOODIMG } from "../utils/constants";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = (e) => {
    setSearchText(e.target.value);
    setFilteredListOfRestaurant(
      restaurantList.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.908877821658663&lng=80.97121808677912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const JSONdata = await data.json();
    setRestaurantList(
      JSONdata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurant(
      JSONdata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const filterHandler = () => {
    setRestaurantList(
      restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4)
    );
  };

  const showAllResHandler = () => {
    setFilteredListOfRestaurant(restaurantList);
  };

  if (restaurantList.length == 0) {
    return <Shimmer />;
  }

  if (!onlineStatus) return <h2>Looks like you are offline right now</h2>;

  return (
    <div className="body">
      <div className="bodyTop">
        <div className="search-bar">
          <input
            type="textbox"
            placeholder="search items here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={filterHandler}>
            Top rated Restaurants
          </button>
          <button className="filter-btn" onClick={showAllResHandler}>
            Show all Restaurants
          </button>
        </div>
      </div>

      <div className="card-container">
        {filteredListOfRestaurant.map((restaurant) => (
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
