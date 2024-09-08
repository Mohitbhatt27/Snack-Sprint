import Card from "./Card";
import { FOODIMG } from "../utils/constants";
import { RESTAURANTS } from "../utils/constants";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">SearchBar</div>
      <div className="card-container">
        {RESTAURANTS.map((restaurant) => (
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
