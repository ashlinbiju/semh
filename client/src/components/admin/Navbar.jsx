import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this file exists and styles are applied correctly

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Website name */}
        <div className="site-name">
          SEMHALL
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/admin/manage-booking">
              Manage Booking
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-hall">
              Manage Hall
            </Link>
          </li>
          <li>
            <Link to="/shared/Login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
