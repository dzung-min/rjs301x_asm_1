import CityList from "../../components/City/CityList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HotelList from "../../components/Hotel/HotelList";
import NavBar from "../../components/NavBar/NavBar";
import PropertyList from "../../components/Property/PropertyList";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <CityList />
      <PropertyList />
      <HotelList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
