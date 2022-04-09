import { Outlet } from 'react-router-dom';
import Footer from '../components/UserPortfolio/Footer';
import Navbar from '../components/UserPortfolio/Navbar';
import SearchBar from '../components/UserPortfolio/SearchBar';
import '../pages/UserPortfolio.css';

const UserPortfolio = () => {
  // add Navbar, outlet and footer
  return (
    <>
      <section>
        <Navbar />
        <SearchBar />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default UserPortfolio;
