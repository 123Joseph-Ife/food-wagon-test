const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="left">
        <h1>Are You Starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="board">
          <div className="top">
            <div className="delivery">Delivery</div>
            <div className="pickup">Pickup</div>
          </div>
          <div className="form">
            <div className="input-container">
              <svg
                className="locator"
                width="30"
                height="25"
                viewBox="0 0 166 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  clipPath="url(#clip0_403_1440)"
                  filter="url(#filter0_dd_403_1440)"
                >
                  <path
                    d="M83 131C82.2399 131 81.5315 130.631 81.1017 130.016C73.0945 118.563 66.1687 109.784 60.6151 102.743L60.6141 102.742C47.793 86.4889 41 77.825 41 62.6562C41 39.6954 59.8345 21 83 21C106.165 21 125 39.6954 125 62.6562C125 77.8084 118.16 86.5393 105.249 102.918L105.249 102.918C99.719 109.933 92.8234 118.681 84.8983 130.016C84.4685 130.631 83.7601 131 83 131Z"
                    fill="#FF7A7A"
                    stroke="url(#paint1_linear_403_1440)"
                    strokeWidth="2"
                  />                                  
                  <path
                    d="M83 86C70.3178 86 60 75.6822 60 63C60 50.3178 70.3178 40 83 40C95.6822 40 106 50.3178 106 63C106 75.6822 95.6822 86 83 86Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_403_1440"
                    x="0"
                    y="0"
                    width="166"
                    height="192"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="20" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.680498 0 0 0 0 0 0 0 0 0.29 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_403_1440"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.680498 0 0 0 0 0 0 0 0 0.26 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_403_1440"
                      result="effect2_dropShadow_403_1440"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_403_1440"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_403_1440"
                    x1="83"
                    y1="-22.8025"
                    x2="83"
                    y2="169.452"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.630208" stopColor="#FFAE00" />
                    <stop offset="1" stopColor="#FFCD1E" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_403_1440"
                    x1="83"
                    y1="20"
                    x2="83"
                    y2="132"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9F00" />
                    <stop offset="1" stopColor="#FFB800" />
                  </linearGradient>
                  <clipPath id="clip0_403_1440">
                    <rect
                      width="86"
                      height="112"
                      fill="white"
                      transform="translate(40 20)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="text"
                placeholder="Enter your address"
                className="input"
              />
            </div>
            <div className="btn-search">
              <svg
                width="15"
                height="15"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z"
                  fill="#FFF"
                />
              </svg>
              find place
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/mac.png" alt="macaroni" width="530px" />
      </div>
    </div>
  );
};

export default LandingPage;
