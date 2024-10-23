import { Link } from 'react-router-dom';
import './NavbarBar.css'; // Make sure to import your CSS file

const NavbarBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="site-name">SEMHALL</li>
        <li><Link to="/user/home">Home</Link></li>
        <li><Link to="/user/view-hall">View Halls</Link></li>
        <li><Link to="/my-bookings">My Bookings</Link></li>
        <li><Link to="/">Logout</Link></li> {/* Adjust the logout link as needed */}
      </ul>
    </nav>
  );
};

export default NavbarBar;
