import { Link } from "react-router-dom";

const GraysVageCards = ({ listOfGray }) => {

  return (
    <div className="grayWrapper">
      {listOfGray.map((gray) => (
        <Link to={`/${gray.id}`}>
          <div className="grayContainer" key={gray.id}>
            <img src={gray.path} alt={gray.alt} width="280px" height="250px" className="gray-image" />

            <div>
              <h3>Grey's Vage</h3>
              <div className="days">{gray.days} days remaining</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GraysVageCards;
