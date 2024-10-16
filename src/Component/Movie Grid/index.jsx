/* eslint-disable react/prop-types */
import "./style.css";

const Moviegrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div key={index} className="movie-gallery">
          <img src={movie.src} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default Moviegrid;
