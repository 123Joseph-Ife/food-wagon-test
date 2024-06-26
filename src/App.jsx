import { useState } from "react";
import "./components/components.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLoginData } from "./hooks/useLoginData";
import Missing from "./Pages/Missing";
import VagePage from "./Pages/VagePage";
import ViewAll from "./Pages/ViewAll";
import MiniHome from "./Pages/Mini App/MiniHome";
import Settings from "./Pages/Mini App/Settings";
import Dashboard from "./Pages/Mini App/Dashboard";
import Aside from "./components/Mini App Components/Aside";

function App() {
  const [background, setBackground] = useState("dark");
  const [click, setClick] = useState("unclicked");

  const { isAuth } = useLoginData();

  const listOfGray = [
    {
      id: 1,
      alt: "first-gray",
      path: "/GrayVage/first-gray.png",
      price: 5.0,
      percent: 15,
      days: 6,
    },
    {
      id: 2,
      alt: "second-gray",
      path: "/GrayVage/second-gray.png",
      price: 10.5,
      percent: 10,
      days: 6,
    },
    {
      id: 3,
      alt: "third-gray",
      path: "/GrayVage/third-gray.png",
      price: 8.0,
      percent: 25,
      days: 7,
    },
    {
      id: 4,
      alt: "fourth-gray",
      path: "/GrayVage/fourth-gray.png",
      price: 9.0,
      percent: 20,
      days: 8,
    },
  ];

  const featuresList = [
    {
      id: 1,
      alt: "map",
      path: "/Features/map.png",
      title: "Select location",
      body: "Choose the location where your food will be delivered.",
    },
    {
      id: 2,
      alt: "order",
      path: "/Features/order.png",
      title: "Choose order",
      body: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      id: 3,
      alt: "money",
      path: "/Features/money.png",
      title: "Pay advanced",
      body: "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      id: 4,
      alt: "donut",
      path: "/Features/donut.png",
      title: "Enjoy meals",
      body: "Food is made and delivered directly to your home.",
    },
  ];

  const popularList = [
    {
      id: 1,
      alt: "Cheese Burger",
      path: "/Popular Foods/cheese-burger.png",
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
    },
    {
      id: 2,
      alt: "Toffe's Cake",
      path: "/Popular Foods/toffe-cake.png",
      title: "Toffe's Cake",
      location: "Top Stick",
      price: "$4.00",
    },
    {
      id: 3,
      alt: "Dancake",
      path: "/Popular Foods/dancake.png",
      title: "Dancake",
      location: "Cake World",
      price: "$1.99",
    },
    {
      id: 4,
      alt: "Crispy Sandwitch",
      path: "/Popular Foods/crispy-sandwitch.png",
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: "$3.00",
    },
    {
      id: 5,
      alt: "Thai Soup",
      path: "/Popular Foods/thai-soup.png",
      title: "Thai Soup",
      location: "Foody man",
      price: "$2.79",
    },
  ];

  const featuredRestaurants = [
    {
      id: 1,
      path: "/Restaurants/egg.png",
      alt: "egg",
      restaurantLogo: "/Restaurants/Restaurant Logos/food-world.png",
      restaurant: "Food World",
      restaurantAlt: "Food World",
      ratings: 46,
      openTime: "Open tomorrow",
      className: "open-tomorrow",
    },
    {
      id: 2,
      path: "/Restaurants/plantain.png",
      alt: "Plantain",
      restaurantLogo: "/Restaurants/Restaurant Logos/pizza-hub.png",
      restaurant: "Pizzahub",
      restaurantAlt: "Pizzahub",
      ratings: 40,
      openTime: "Open tomorrow",
      className: "open-tomorrow",
    },
    {
      id: 3,
      path: "/Restaurants/pancake.png",
      alt: "Pan Cake",
      restaurantLogo: "/Restaurants/Restaurant Logos/donut-hut.png",
      restaurant: "Donuts hut",
      restaurantAlt: "Donuts hut",
      ratings: 20,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 4,
      path: "/Restaurants/cup-cake.png",
      alt: "Cup Cake",
      restaurantLogo: "/Restaurants/Restaurant Logos/sub-way.png",
      restaurant: "Donuts hut",
      restaurantAlt: "Donuts hut",
      ratings: 50,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 5,
      path: "/Restaurants/brisket.png",
      alt: "Brisket",
      restaurantLogo: "/Restaurants/Restaurant Logos/ruby-tuesday.png",
      restaurant: "Ruby Tuesday",
      restaurantAlt: "Ruby Tuesday",
      ratings: 26,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 6,
      path: "/Restaurants/chicken-plantain.png",
      alt: "Chicken Plantain",
      restaurantLogo: "/Restaurants/Restaurant Logos/kuakata-fried-chicken.png",
      restaurant: "Kuakata Chicken",
      restaurantAlt: "Kuakata Fried Chicken",
      ratings: 53,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 7,
      path: "/Restaurants/chinese-soup.png",
      alt: "Chinese soup",
      restaurantLogo: "/Restaurants/Restaurant Logos/red-square.png",
      restaurant: "Red Square",
      restaurantAlt: "Red Square",
      ratings: 45,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 8,
      path: "/Restaurants/meat-egg.png",
      alt: "Meat Egg",
      restaurantLogo: "/Restaurants/Restaurant Logos/taco-bell.png",
      restaurant: "Taco Bell",
      restaurantAlt: "Taco Bell",
      ratings: 35,
      openTime: "Open Now",
      className: "open-now",
    },
  ];

  const aboutFood = [
    {
      id: 1,
      path: "/About Foods/sandwitch.png",
      title: "Pizza",
      heading: "Best deals",
      orange: "Crispy Sandwiches",
      info: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    },
    {
      id: 2,
      path: "/About Foods/fried-chicken.png",
      title: "Chicken",
      heading: "Celebrate parties with",
      orange: "Fried Chicken",
      info: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    },
    {
      id: 3,
      path: "/About Foods/sandwitch.png",
      title: "Sand witch",
      heading: "Wanna eat hot & spicy",
      orange: "Pizza?",
      info: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    },
  ];

  if (isAuth) {
    return (
      <div className={background === "light" ? "minilightapp" : "miniapp"}>
        <BrowserRouter>
          <Aside click={click} setClick={setClick} />
          <Routes>
            <Route
              path="/"
              element={<MiniHome click={click} setClick={setClick} />}
            />
            <Route path="/minihome" element={<MiniHome />} />
            <Route
              path="/settings"
              element={
                <Settings
                  click={click}
                  setClick={setClick}
                  background={background}
                  setBackground={setBackground}
                />
              }
            />
            <Route
              path="/dashboard"
              element={<Dashboard click={click} setClick={setClick} />}
            />
            <Route path="*" element={<Missing />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  listOfGray={listOfGray}
                  featuresList={featuresList}
                  popularList={popularList}
                  featuredRestaurants={featuredRestaurants}
                  aboutFood={aboutFood}
                />
              }
            />
            <Route
              path="/login/"
              element={
                <Login />
              }
            />
            <Route path="/:id" element={<VagePage listOfGray={listOfGray} />} />
            <Route
              path="/viewall"
              element={<ViewAll featuredRestaurants={featuredRestaurants} />}
            />
            <Route path="*" element={<Missing />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
