import { useState } from "react";
import "./Mainpage.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MovieCard from "../components/MovieCard/MovieCard";
import WishListItem from "../components/WishListItem/WishListItem";
import Dropdown from "../components/Dropdown/Dropdown";
import movies from "../data/movies";

function MainPage() {
  const [wishList, setWishList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [genre, setGenre] = useState("장르");
  const [sort, setSort] = useState("정렬");

  const handleToggleWish = (movie) => {
    setWishList((prev) =>
      prev.find((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const filteredMovies = movies
    .filter((movie) => {
      const matchSearch = movie.title.toLowerCase().includes(searchValue.toLowerCase());
      const matchGenre = genre === "장르" || movie.genre === genre;
      return matchSearch && matchGenre;
    })
    .sort((a, b) => {
      if (sort === "평점 높은 순") return b.rating - a.rating;
      if (sort === "평점 낮은 순") return a.rating - b.rating;
      return 0;
    });

  return (
    <div className="main-page">
      <Header
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onMenuClick={() => {}}
      />
      <div className="filters">
        <Dropdown
          options={["장르", "액션", "SF", "애니메이션", "공포", "코미디", "드라마"]}
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Dropdown
          options={["정렬", "평점 높은 순", "평점 낮은 순"]}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        />
      </div>
      <div className="content">
        <div className="movie-list">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWished={wishList.some((m) => m.id === movie.id)}
              onToggleWish={() => handleToggleWish(movie)}
            />
          ))}
        </div>

        <aside className="wish-panel">
          <h2>My Wish List</h2>
          {wishList.map((movie) => (
            <WishListItem
              key={movie.id}
              movie={movie}
              onRemove={() => handleToggleWish(movie)}
            />
          ))}
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;