import "./MovieCard.css";

function MovieCard({ movie, onToggleWish, isWished }) {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <div className="movie-header">
          <h3>{movie.title}</h3>
          <span className="rating">★ {movie.rating}</span>
        </div>
        <p className="description">{movie.description}</p>
        <div className="movie-footer">
          <span className="release-date">개봉: {movie.releaseDate}</span>
          <button
            className={`wish-button ${isWished ? "wished" : ""}`}
            onClick={onToggleWish}
          >
            Wish
          </button>
        </div>
      </div>
      <div className="movie-poster">
        {movie.poster ? (
          <img src={movie.poster} alt={movie.title} />
        ) : (
          <div className="poster-placeholder" />
        )}
      </div>
    </div>
  );
}

export default MovieCard;