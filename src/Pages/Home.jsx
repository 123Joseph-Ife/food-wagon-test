import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const Home = ({
  listOfGray,
  featuresList,
  popularList,
  featuredRestaurants,
  aboutFood,
}) => {
  return (
    <div>
      <Header />
      <Main
        listOfGray={listOfGray}
        featuresList={featuresList}
        popularList={popularList}
        featuredRestaurants={featuredRestaurants}
        aboutFood={aboutFood}
      />
      <Footer />
    </div>
  );
};

export default Home;
