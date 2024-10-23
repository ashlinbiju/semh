import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginSelection from './components/shared/LoginSelection';
import NavbarBar from './components/user/NavbarBar'; // User Navbar
import Navbar from './components/admin/Navbar';      // Admin Navbar
import Home from './components/user/Home';
import AdminHome from './components/admin/AdminHome';
import MyBooking from './components/user/MyBooking';
import ManageBooking from './components/admin/ManageBooking';
import ManageHall from './components/admin/ManageHall';

const Navigation = () => {
  const location = useLocation();

  // No navbar on the login screen
  if (location.pathname === '/') {
    return null; // Don't display any navbar on the login page
  }

  // Admin routes should display the Admin Navbar
  if (location.pathname.startsWith('/admin')) {
    return <Navbar />; // Admin navbar
  }

  // User routes should display the User Navbar
  return <NavbarBar />; // User navbar
};

const App = () => {
  return (
    <Router>
      <Navigation /> {/* Conditionally render navbar based on route */}
      <Routes>
        {/* Login screen with no navbar */}
        <Route path="/" element={<LoginSelection />} />
        
        {/* Admin routes */}
        <Route path="/admin/admin-home" element={<AdminHome />} />
        <Route path="/admin/manage-hall" element={<ManageHall />} />
        <Route path="/admin/manage-booking" element={<ManageBooking />} />
        
        {/* User routes */}
        <Route path="/user/home" element={<Home />} />
        <Route path="/my-bookings" element={<MyBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
