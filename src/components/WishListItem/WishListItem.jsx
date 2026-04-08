import "./WishListItem.css";

function WishListItem({ movie, onRemove }) {
  return (
    <div className="wishlist-item">
      {movie.title}
      <button onClick={onRemove}>X</button>
    </div>
  );
}

export default WishListItem;