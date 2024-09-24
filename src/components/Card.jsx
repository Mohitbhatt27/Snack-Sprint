const Card = ({ name, cusine, ratings, eta, foodImg }) => {
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

// eslint-disable-next-line react-refresh/only-export-components
export const withPromoted = (Card) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return ( 
    <div>
     <div></div> 
    <Card {...props} />
    </div>
  )};
}

export default Card;
