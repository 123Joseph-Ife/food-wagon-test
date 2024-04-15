import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Well that's disappointing <Link to="/">link to our homepage</Link>
      </p>
    </div>
  );
};

export default Missing;
