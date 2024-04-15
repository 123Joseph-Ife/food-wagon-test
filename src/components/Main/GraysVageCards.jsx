import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetJson } from "../../hooks/useGetJson";

const GraysVageCards = () => {
  const [run, setRun] = useState([]);


  const first = async () => {
    const { listOfGray } = await useGetJson();
    setRun(listOfGray)
  };

  useEffect(() => {
    first()
  }, [])

  return (
    <div className="grayWrapper">
      {run.map((gray) => (
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
