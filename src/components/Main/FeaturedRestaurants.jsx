import { Link } from "react-router-dom";

const FeaturedRestaurants = ({ featuredRestaurants }) => {
  return (
    <div className="restaurants-container">
      <h1 className="restaurants-heading">Featured Restaurants</h1>
      <div className="restaurants">
        {featuredRestaurants.map((restaurant) => (
          <div className="restaurant" key={restaurant.id}>
            <img
              src={restaurant.path}
              alt={restaurant.alt}
              width="280px"
              height="250px"
              className="food"
            />
            <div className="logo-part">
              <img
                src={restaurant.restaurantLogo}
                alt={restaurant.restaurantAlt}
                width="64px"
                height="64px"
                className="img"
              />
              <div className="text-part">
                <p className="restaurant-name">{restaurant.restaurant}</p>
                <div className="rating">
                  <img src="src/assets/star.png" alt="star" width="20px" />
                  {restaurant.ratings}
                </div>
              </div>
            </div>
            <div className={restaurant.className}>{restaurant.openTime}</div>
          </div>
        ))}

        <div className="featured-view-container">
          <button className="featured-view">
            <Link to="/viewall">{"view all >"}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
