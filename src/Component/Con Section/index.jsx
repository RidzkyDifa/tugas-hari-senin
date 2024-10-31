/* eslint-disable react/prop-types */
import Header from "../Header";
const MovieCon = ({ movies, title }) => {
  return (
    <section className="section-1">
      <Header title={title} />
      <div className="con-section">
        {movies.map((movie, index) => (
          <div key={index} className="movie-con">
            <img src={movie.src} alt={movie.title} />
            <div className="con-child">
              <p className="mini-title">{movie.title}</p>
              <p className="mini-rating">{movie.rating} / 5.0</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieCon;
