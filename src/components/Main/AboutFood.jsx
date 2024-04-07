const AboutFood = ({ aboutFood }) => {
  return (
    <div className="about-container">
      {aboutFood.map((food) => (
        <div className="about" key={food.id}>
          <div className="info">
            <div>
              <h2>
                {food.heading}
                <span className="orange">{food.orange}</span>
              </h2>
              <p>{food.info}</p>
            </div>

            <button className="info-btn">{"Proceed to order >"}</button>
          </div>
          <img src={food.path} alt={food.title} className="image" />
        </div>
      ))}
    </div>
  );
};

export default AboutFood;
