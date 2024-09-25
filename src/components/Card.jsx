import { useNavigate } from "react-router-dom";

const Card = ({ name, cusine, ratings, eta, foodImg, id }) => {
  const navigate = useNavigate();
  const handleCardOnClick = () => {
    navigate(`restaurant/${id}`);
  };
  return (
    <div className="card" onClick={handleCardOnClick}>
      <div className="foodimg">
        <img src={foodImg} alt="food-item" />
      </div>
      <div className="resInfo">
        <div className="resName">{name}</div>
        <div>{cusine}</div>
        <div>{ratings} stars </div>
        <div>{eta} minutes</div>
      </div>
    </div>
  );
};

export default Card;
