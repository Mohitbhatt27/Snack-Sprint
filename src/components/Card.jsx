import foodImg from "../assets/biryani.jpg";
export const Card = () => {
  return (
    <div className="card">
      <div className="foodimg">
        <img src={foodImg} alt="food-item" />
      </div>
      <div className="resInfo">
        <div>Biryani House</div>
        <div>North Indian, Asian</div>
        <div>4.4 stars </div>
        <div>32 minutes</div>
      </div>
    </div>
  );
};
