import "./MovieCard.css";

function MovieCard({ movie, onToggleWish }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <button onClick={onToggleWish}>Add</button>
    </div>
  );
}

export default MovieCard;