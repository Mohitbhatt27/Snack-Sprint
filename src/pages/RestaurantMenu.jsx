import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

const RestaurantMenu = () => {
  const [category, setCategory] = useState([]);
  const { resId } = useParams();

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addItems("pizza"))
  }

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(`${MENU}${resId}`);
      const JSONdata = await data.json();
      const categories =
        JSONdata?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) => card?.card?.card["@type"].includes("ItemCategory")
        );
      // console.log(categories);
      setCategory(categories);
    };
    fetchMenu();
  }, [resId]);

  return (
    <div className="restaurant-menu">
      <div className="category">
        {category.map((category) => (
          <div className="eachCategory" key={category.card.card.title}>
            {category.card.card.title}
            <div className="">
            <button onClick={handleOnClick}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
