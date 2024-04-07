import { useParams, Link, useNavigate } from "react-router-dom";

const VagePage = ({ listOfGray }) => {
  const { id } = useParams();
  const vage = listOfGray.find((gray) => gray.id.toString() === id);
  const navigate = useNavigate();

  const order = () => {
    alert("Order submitted")
    navigate("/")
  }

  return (
    <div className="vage-container">
      {vage && (
        <>
          <div className="vage">
            <div className="img-container">
              <img
                src={vage.path}
                alt={vage.alt}
                width="500px"
                height="450px"
              />
            </div>
            <div className="left">
              <div className="percentage">%{vage.percent} off</div>
              <p className="price">${vage.price}</p>
              <div className="vage-days">{vage.days} days remaining</div>
              <p className="remaining">Till delivery date</p>
              <button className="vage-order" onClick={order}>Order now</button>
            </div>
          </div>
        </>
      )}
      {!vage && (
        <>
          <h1>Page not found</h1>
          <p>Well that's disappointing <Link to="/">link to our homepage</Link></p>
        </>
      )}
    </div>
  );
};

export default VagePage;
