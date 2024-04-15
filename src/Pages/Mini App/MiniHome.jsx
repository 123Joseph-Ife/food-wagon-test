import MiniFooter from "./Mini-Footer";
import Top from "./Top";

const MiniHome = ({ click, setClick }) => {
  let randNum = Math.floor(Math.random() * 4);
  let randNumFour = Math.floor(Math.random() * 3);
  let randWords = ["first", "second", "third", "fourth"];
  let randWordsTwo = ["brisket", "egg", "pancake", "meat-egg"];
  let randWordsThree = ["dancake", "thai-soup", "cheese-burger", "crispy-sandwitch"];
  let randWordsFour = ["fried-chicken", "sandwitch", "spicy-pizza"];
  let randPercentArray = [15, 10, 25, 20];
  let randPriceArray = [5.0, 10.5, 8.0, 9.0];

  const rand = randWords[randNum];
  const randTwo = randWordsTwo[randNum];
  const randThree = randWordsThree[randNum];
  const randFour = randWordsFour[randNumFour];


  const randPercent = randPercentArray[randNum];
  const randPrice = randPriceArray[randNum];

  return (
    <main className="minihome">
      <Top click={click} setClick={setClick}  />
      <div className="wide-box">
        <h1 className="h1">How are you doing today?</h1>
        <div className="wide-box-flex">
          <div className="img-box">
            <img
              src={`/GrayVage/${rand}-gray.png`}
              width="350px"
              // height="300px"
            />
          </div>
          <div className="wide-box-left">
            <p>
              Order today's delicious delicacy with {randPercent}% off. You
              would feel the vibration of the food entering your body, with a
              very calm feeling. Get now at ${randPrice}
            </p>
            <button className="minihome-order">Order now</button>
          </div>
        </div>
      </div>
      <div className="small-box-container">
        <div className="small-box">
          <img
            src={`/Restaurants/${randTwo}.png`}
            width="250px"
            height="200px"
          />
          <button className="minihome-order">Order now</button>
        </div>
        <div className="small-box">
          <img
            src={`/Popular Foods/${randThree}.png`}
            width="250px"
            height="200px"
          />
          <button className="minihome-order">Order now</button>
        </div>
        <div className="small-box">
          <img
            src={`/About Foods/${randFour}.png`}
            width="250px"
            height="200px"
            className="small-box-about-foods"
          />
          <button className="minihome-order">Order now</button>
        </div>
      </div>
      <MiniFooter />
    </main>
  );
};

export default MiniHome;
