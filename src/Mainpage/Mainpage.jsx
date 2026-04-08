import "./MainPage.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import Dropdown from "../Dropdown/Dropdown";
import MovieCard from "../MovieCard/MovieCard";
import WishListItem from "../WishListItem/WishListItem";
import WishButton from "../WishButton/WishButton";

function MainPage() {
  const movie = {
    title: "Movie",
    description: "Test",
    rating: 5,
    releaseDate: "2026"
  };

  return (
    <div className="main-page">
      <Header
        searchValue=""
        onSearchChange={() => {}}
        onMenuClick={() => {}}
      />

      <SearchBar value="" onChange={() => {}} />

      <Dropdown
        options={["A", "B"]}
        value="A"
        onChange={() => {}}
      />

      <MovieCard
        movie={movie}
        onToggleWish={() => {}}
      />

      <WishButton isActive={false} onClick={() => {}} />

      <WishListItem
        movie={movie}
        onRemove={() => {}}
      />

      <Footer text="LIKELION X KWU" />
    </div>
  );
}

export default MainPage;