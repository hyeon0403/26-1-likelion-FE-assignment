import "./Mainpage.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";
import MovieCard from "../components/MovieCard/MovieCard";
import WishListItem from "../components/WishListItem/WishListItem";
import WishButton from "../components/WishButton/WishButton";

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