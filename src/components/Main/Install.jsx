const Install = () => {
  return (
    <div className="install">
      <div className="ifeatures">
        <div className="div">
          <img
            src="\Install App\percentage.png"
            alt="percentage"
            width="100px"
          />
          <h3 className="txt">Daily Discounts</h3>
        </div>
        <div className="div">
          <img
            src="\Install App\live-tracking.png"
            alt="live tracking"
            width="100px"
          />
          <h3 className="txt">Live Tracking</h3>
        </div>
        <div className="div">
          <img
            src="\Install App\clock.png"
            alt="clock"
            width="100px"
          />
          <h3 className="txt">Quick Delivery</h3>
        </div>
      </div>
      <div className="mobile">
        <div className="image-box">
          <img src="\Install App\phone.png" alt="phone" width="600px" />
        </div>
        <div className="text-box">
          <h2>Install the app</h2>
          <p>
            It's never been easier to order food. Look for the finest discounts
            and you'll be lost in a world of delectable food.
          </p>
          <div className="buttons">
            <button>
              <span>GET IT ON</span>
              <div>
                <img src="\Install App\play.png" alt="play" width="15px" />
                <h3>Google Play</h3>
              </div>
            </button>
            <button>
              <span>Download on the</span>
              <div>
                <img src="\Install App\apple.png" alt="play" width="15px" />
                <h3>App Store</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
