const ViewAll = ({ featuredRestaurants }) => {
  return (
        <div className="restaurants-container">
      <h1 className="restaurants-heading">All Restaurants</h1>
      <div className="restaurants">
        {featuredRestaurants.map((restaurant) => (
          <div className="restaurant" key={restaurant.id}>
            <img
              src={restaurant.path}
              alt={restaurant.alt}
              width="300px"
              height="250px"
            />
            <div className="logo-part">
              <img
                src={restaurant.restaurantLogo}
                alt={restaurant.restaurantAlt}
                width="64px"
                height="64px"
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
      </div>
    </div>
  )
}

export default ViewAll