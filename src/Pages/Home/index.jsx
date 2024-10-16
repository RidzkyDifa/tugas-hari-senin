import Navbar from "../../Component/Navbar";
import Section1 from "../../Component/Section1";
import {
  topMovies,
  trendingMovies,
  newRelease,
} from "../../Asset/Images/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Section1 title="Top Movies" movies={topMovies} />
      <Section1 title="Trending Movies" movies={trendingMovies} />
      <Section1 title="New Release" movies={newRelease} />
    </>
  );
};

export default Home;
