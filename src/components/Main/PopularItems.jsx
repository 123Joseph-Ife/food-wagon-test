const PopularItems = ({ popularList }) => {
  return (
    <div className="popular-container">
      <h1>Popular Items</h1>
      <div className="populars">
        {popularList.map((popular) => (
          <div className="popular" key={popular.id}>
            <img src={popular.path} alt={popular.alt} width="210px" className="popular-image" />
            <h3>{popular.title}</h3>
            <div className="food-location">
              <img src="/Features/map.png" alt="map-locator" width="20px" />
              <p>{popular.location}</p>
            </div>
            <p className="price">{popular.price}</p>
            <button className="order">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
