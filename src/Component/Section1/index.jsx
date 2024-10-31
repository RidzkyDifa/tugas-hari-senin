/* eslint-disable react/prop-types */

import Moviegrid from "../Movie Grid";
import Header from "../Header";
import "./style.css";

const Section1 = ({ movies, title }) => {
  return (
    <>
      <section className="section-1">
        <Header title={title} />
        <button className="scroll-button left">←</button>
        <Moviegrid movies={movies} />
        <button className="scroll-button right">→</button>
      </section>
    </>
  );
};

export default Section1;
