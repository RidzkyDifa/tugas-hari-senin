/* eslint-disable react/prop-types */
import SoundLogo from "../../Asset/mute-icon.png";
import "./style.css";
const MainSection = ({ movies }) => {
  return (
    <>
      <section className="main-section">
        {movies.map((movie, index) => (
          <div key={index} className="movie-main">
            <img className="bg-main" src={movie.src} alt={movie.title} />
            <div className="main-desc">
              <div className="main-title">
                <h2>Duty After School</h2>
              </div>
              <div className="desc-main">
                <p>
                  Sebuah benda tak dikenal mengambil alih dunia. Dalam
                  keputusasaan, Departemen Pertahanan mulai merekrut lebih
                  banyak tentara, termasuk siswa sekolah menengah. Mereka pun
                  segera menjadi pejuang garis depan dalam perang.
                </p>
              </div>
              <div className="main-option">
                <button className="start-btn">Mulai</button>
                <button className="option-btn">Selengkapnya</button>
                <p className="age-logo">18+</p>
                <img src={SoundLogo} alt="sound" className="sound-logo" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default MainSection;
