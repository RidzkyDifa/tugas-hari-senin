import { genres } from "../../Asset/Images/list";

const ListGrid = () => {
  return (
    <div>
      <div className="genre-list">
        {genres.map((genre, index) => (
          <div key={index} className="genre-item">
            {genre.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListGrid;
