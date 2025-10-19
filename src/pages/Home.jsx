import SellerBooks from "../components/SellerBooks";
import FavoriteBooks from "../components/FavoriteBooks";
import Landing from "../components/Landing";
import NationalBook from "../components/NationalBook";
import Releases from "../components/Releases";

const Home = () => {
  return (
    <div>
      <Landing />
      <SellerBooks />
      <FavoriteBooks />
      <NationalBook />
      <Releases />
    </div>
  );
};

export default Home;
