import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSelection from './components/shared/LoginSelection';
import NavbarBar from './components/user/NavbarBar';
import Navbar from './components/admin/Navbar';
import Home from './components/user/Home';
import AdminHome from './components/admin/AdminHome';
import MyBooking from './components/user/MyBooking';
import ManageBooking from './components/admin/ManageBooking';
import ManageHall from './components/admin/ManageHall';


const App = () => {
  return (
    <Router>
     <Navigation />
      <Routes>
                <Route path="/" element={<LoginSelection />} />
                <Route path="/admin/admin-home" element={<AdminHome />} />
                <Route path="/user/home" element={<Home />} />
                <Route path="/my-bookings" element={<MyBooking />} />
                <Route path="/admin/manage-hall" element={<ManageHall/>} />
                <Route path="/admin/manage-booking" element={<ManageBooking />} />
            </Routes>
    </Router>
  );
};

export default App;