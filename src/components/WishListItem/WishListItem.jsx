import "./WishListItem.css";

function WishListItem({ movie, onRemove }) {
  return (
    <div className="wishlist-item" onClick={onRemove}>
      {movie.title}
    </div>
  );
}

export default WishListItem;