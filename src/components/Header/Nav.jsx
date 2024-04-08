import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="name">
        <img src="/mask.png" alt="hamburger" width="30px" />
        <div className="text">
          <span className="red">food</span>
          <span className="yellow">wagon</span>
        </div>
      </div>
      <div className="location">
        <h4>
          Deliver to:
          <svg
            width="25"
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
                fill="url(#paint0_linear_403_1440)"
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
          Current Location,
        </h4>
      </div>
      <div className="login">
        <div className="search-login">
          <svg
            width="15"
            height="15"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z"
              fill="#FFB30E"
            />
          </svg>
          <span>Search Food</span>
        </div>
        <Link to="/login">
          <button className="btn-login">
            <svg
              width="15"
              height="14"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z"
                fill="url(#paint0_linear_401_1279)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_401_1279"
                  x1="-7.02825"
                  y1="-22.35"
                  x2="23.9034"
                  y2="-20.9848"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFB800" />
                  <stop offset="1" stopColor="#FF8A00" />
                </linearGradient>
              </defs>
            </svg>
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
