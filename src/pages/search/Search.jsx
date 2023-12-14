import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchPopUp from "../../components/SearchPopUp/SearchPopUp";
import SearchList from "../../components/SearchList/SearchList";

const Search = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "1200px",
          margin: "auto",
          paddingTop: "50px",
          display: "flex",
          gap: "20px",
        }}
      >
        <SearchPopUp />
        <SearchList />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
