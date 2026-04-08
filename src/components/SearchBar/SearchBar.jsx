import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return <input className="search-bar" value={value} onChange={onChange} />;
}

export default SearchBar;