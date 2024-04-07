import AboutFood from "./AboutFood";
import FeaturedRestaurants from "./FeaturedRestaurants";
import Features from "./Features";
import GraysVage from "./GraysVage";
import Install from "./Install";
import PopularItems from "./PopularItems";

const Main = ({
  listOfGray,
  featuresList,
  popularList,
  featuredRestaurants,
  aboutFood,
}) => {
  return (
    <main>
      <GraysVage listOfGray={listOfGray} />
      <Features featuresList={featuresList} />
      <PopularItems popularList={popularList} />
      <FeaturedRestaurants featuredRestaurants={featuredRestaurants} />
      <Install />
      <AboutFood aboutFood={aboutFood} />
    </main>
  );
};

export default Main;
