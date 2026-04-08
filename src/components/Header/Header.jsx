import "./Header.css";

function Header({ searchValue, onSearchChange, onMenuClick }) {
  return (
    <header className="header">
      <input value={searchValue} onChange={onSearchChange} />
      <button onClick={onMenuClick}>Menu</button>
    </header>
  );
}

export default Header;