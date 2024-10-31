import Navbar from "../../Component/Navbar";
import Section1 from "../../Component/Section1";
import MovieCon from "../../Component/Con Section";
import MainSection from "../../Component/Main Section";
import Footer from "../../Component/Footer";
import {
  topMovies,
  trendingMovies,
  newRelease,
  continueMovies,
  mainSection,
} from "../../Asset/Images/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainSection movies={mainSection} />
      <MovieCon title="Lanjutkan Menonton" movies={continueMovies} />
      <Section1 title="Top Movies" movies={topMovies} />
      <Section1 title="Trending Movies" movies={trendingMovies} />
      <Section1 title="New Release" movies={newRelease} />
      <Footer />
    </>
  );
};

export default Home;
