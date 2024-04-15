const Top = ({ click, setClick }) => {
  const today = new Date();
  const arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = `${
    arr[today.getMonth()]
  } ${today.getDate()} ${today.getFullYear()}`;
  return (
    <div className="login-top">
      <div className="hamburger-container">
        <h1>Food Wagon</h1>
        <div
          className="hamburger"
          onClick={() => {
            click === "clicked" ? setClick("unclicked") : setClick("clicked");
          }}
        >
          <span className={click === "clicked" ? "active" : "span"}></span>
          <span className={click === "clicked" ? "active" : "span"}></span>
          <span className={click === "clicked" ? "active" : "span"}></span>
        </div>
      </div>
      <div className="user-container">
        <div className="user">
          <div className="profileimage-container">
            <img
              src="/mask.png"
              alt="user image"
              width="50px"
              className="profileimage"
            />
          </div>
          <p>ife4373@gmail.com</p>
        </div>
        <p>{now}</p>
      </div>
    </div>
  );
};

export default Top;
