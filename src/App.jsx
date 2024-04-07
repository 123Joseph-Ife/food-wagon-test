import { useState } from "react";
import "./components/components.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Missing from "./Pages/Missing";
import VagePage from "./Pages/VagePage";
import ViewAll from "./Pages/ViewAll";
import { googleProvider, auth } from "./config/firebase.";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signInWithEmail = async () => {
    try {
      if (pass.length > 6) {
        await createUserWithEmailAndPassword(auth, email, pass);
      }
    } catch (error) {
      console.log(error);
      alert("This account already exists");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
      alert("This account already exists");
    }
  };

  const listOfGray = [
    {
      id: 1,
      alt: "first-gray",
      path: "src/assets/Gray's Vage/firstgray.JPG",
      price: 5.0,
      percent: 15,
      days: 6,
    },
    {
      id: 2,
      alt: "second-gray",
      path: "src/assets/Gray's Vage/second-gray.png",
      price: 10.5,
      percent: 10,
      days: 6,
    },
    {
      id: 3,
      alt: "third-gray",
      path: "src/assets/Gray's Vage/third-gray.png",
      price: 8.0,
      percent: 25,
      days: 7,
    },
    {
      id: 4,
      alt: "fourth-gray",
      path: "src/assets/Gray's Vage/fourth-gray.png",
      price: 9.0,
      percent: 20,
      days: 8,
    },
  ];

  const featuresList = [
    {
      id: 1,
      alt: "map",
      path: "src/assets/Features/map.png",
      title: "Select location",
      body: "Choose the location where your food will be delivered.",
    },
    {
      id: 2,
      alt: "order",
      path: "src/assets/Features/order.png",
      title: "Choose order",
      body: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      id: 3,
      alt: "money",
      path: "src/assets/Features/money.png",
      title: "Pay advanced",
      body: "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      id: 4,
      alt: "donut",
      path: "src/assets/Features/donut.png",
      title: "Enjoy meals",
      body: "Food is made and delivered directly to your home.",
    },
  ];

  const popularList = [
    {
      id: 1,
      alt: "Cheese Burger",
      path: "src/assets/Popular Foods/cheese-burger.png",
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
    },
    {
      id: 2,
      alt: "Toffe's Cake",
      path: "src/assets/Popular Foods/toffe-cake.png",
      title: "Toffe's Cake",
      location: "Top Stick",
      price: "$4.00",
    },
    {
      id: 3,
      alt: "Dancake",
      path: "src/assets/Popular Foods/dancake.png",
      title: "Dancake",
      location: "Cake World",
      price: "$1.99",
    },
    {
      id: 4,
      alt: "Crispy Sandwitch",
      path: "src/assets/Popular Foods/crispy-sandwitch.png",
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: "$3.00",
    },
    {
      id: 5,
      alt: "Thai Soup",
      path: "src/assets/Popular Foods/thai-soup.png",
      title: "Thai Soup",
      location: "Foody man",
      price: "$2.79",
    },
  ];

  const featuredRestaurants = [
    {
      id: 1,
      path: "src/assets/Restaurants/egg.png",
      alt: "egg",
      restaurantLogo: "src/assets/Restaurants/Restaurant Logos/food-world.png",
      restaurant: "Food World",
      restaurantAlt: "Food World",
      ratings: 46,
      openTime: "Open tomorrow",
      className: "open-tomorrow",
    },
    {
      id: 2,
      path: "src/assets/Restaurants/plantain.png",
      alt: "Plantain",
      restaurantLogo: "src/assets/Restaurants/Restaurant Logos/pizza-hub.png",
      restaurant: "Pizzahub",
      restaurantAlt: "Pizzahub",
      ratings: 40,
      openTime: "Open tomorrow",
      className: "open-tomorrow",
    },
    {
      id: 3,
      path: "src/assets/Restaurants/pancake.png",
      alt: "Pan Cake",
      restaurantLogo: "src/assets/Restaurants/Restaurant Logos/donut-hut.png",
      restaurant: "Donuts hut",
      restaurantAlt: "Donuts hut",
      ratings: 20,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 4,
      path: "src/assets/Restaurants/cup-cake.png",
      alt: "Cup Cake",
      restaurantLogo: "src/assets/Restaurants/Restaurant Logos/sub-way.png",
      restaurant: "Donuts hut",
      restaurantAlt: "Donuts hut",
      ratings: 50,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 5,
      path: "src/assets/Restaurants/brisket.png",
      alt: "Brisket",
      restaurantLogo:
        "src/assets/Restaurants/Restaurant Logos/ruby-tuesday.png",
      restaurant: "Ruby Tuesday",
      restaurantAlt: "Ruby Tuesday",
      ratings: 26,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 6,
      path: "src/assets/Restaurants/chicken-plantain.png",
      alt: "Chicken Plantain",
      restaurantLogo:
        "src/assets/Restaurants/Restaurant Logos/kuakata-fried-chicken.png",
      restaurant: "Kuakata Chicken",
      restaurantAlt: "Kuakata Fried Chicken",
      ratings: 53,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 7,
      path: "src/assets/Restaurants/chinese-soup.png",
      alt: "Chinese soup",
      restaurantLogo: "src/assets/Restaurants/Restaurant Logos/red-square.png",
      restaurant: "Red Square",
      restaurantAlt: "Red Square",
      ratings: 45,
      openTime: "Open Now",
      className: "open-now",
    },
    {
      id: 8,
      path: "src/assets/Restaurants/meat-egg.png",
      alt: "Meat Egg",
      restaurantLogo: "src/assets/Restaurants/Restaurant Logos/taco-bell.png",
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
      path: "src/assets/About Foods/spicy-pizza.png",
      title: "Pizza",
      heading: "Best deals",
      orange: "Crispy Sandwiches",
      info: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    },
    {
      id: 2,
      path: "src/assets/About Foods/fried-chicken.png",
      title: "Chicken",
      heading: "Celebrate parties with",
      orange: "Fried Chicken",
      info: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    },
    {
      id: 3,
      path: "src/assets/About Foods/sandwitch.png",
      title: "Sand witch",
      heading: "Wanna eat hot & spicy",
      orange: "Pizza?",
      info: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    },
  ];

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
              <Login
                email={email}
                pass={pass}
                setEmail={setEmail}
                setPass={setPass}
                signInWithEmail={signInWithEmail}
                signInWithGoogle={signInWithGoogle}
              />
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
export default App;
