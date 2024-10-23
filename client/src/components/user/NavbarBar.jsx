import { Link } from 'react-router-dom';
import './NavbarBar.css'
const NavbarBar = () => {
  return (
    <nav>
      <ul>
        <li>SEMHALL</li>
        <li><Link to="/user/home">Home</Link></li>
        <li><Link to="/user/view-hall">View Halls</Link></li>
        <li><Link to="/user/my-bookings">My Bookings</Link></li>
        <li><Link to="/shared/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarBar;
