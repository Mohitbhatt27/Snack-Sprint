export const Card = ({ name, cusine, ratings, eta, foodImg }) => {
  return (
    <div className="card">
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
