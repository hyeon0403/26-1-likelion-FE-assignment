import "./Header.css";

function Header({ searchValue, onSearchChange, onMenuClick }) {
  return (
    <header className="header">
      <span className="logo">KWU LIKELION THEATER</span>
      <div className="search-wrapper">
        <input
          className="search-input"
          placeholder="검색어를 입력하세요"
          value={searchValue}
          onChange={onSearchChange}
        />
        <span className="search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
      </div>
      <button className="menu-button" onClick={onMenuClick}>☰</button>
    </header>
  );
}

export default Header;