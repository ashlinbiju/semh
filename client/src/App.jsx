import  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginSelection from './components/shared/LoginSelection';
import NavbarBar from './components/user/NavbarBar'; // User Navbar
import Navbar from './components/admin/Navbar';      // Admin Navbar
import Home from './components/user/Home';
import AdminHome from './components/admin/AdminHome';
import MyBooking from './components/user/MyBooking';
import ManageBooking from './components/admin/ManageBooking';
import UserBooking from './components/user/UserBooking'; // Import UserBooking component
import Login from './components/shared/Login';

// Mock function to simulate fetching booking data from an API
const fetchBookings = async () => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe', hall: 'Main Hall', date: '2024-11-15', status: 'Pending' },
        { id: 2, name: 'Jane Smith', hall: 'Conference Room', date: '2024-11-16', status: 'Approved' },
        // More mock bookings can be added here
      ]);
    }, 1000);
  });
};

// Function to update booking status
const updateBookingStatus = (id, newStatus) => {
  console.log(`Booking ID: ${id} has been updated to ${newStatus}`);
  // Here you can implement logic to update the booking status in your state or database
};

// Navigation component to display the correct navbar based on the route
const Navigation = () => {
  const location = useLocation();

  // No navbar on the login screen or role selection
  if (location.pathname === '/' || location.pathname.includes('/login')) {
    return null; // Don't display any navbar on the login or role selection page
  }

  // Admin routes should display the Admin Navbar
  if (location.pathname.startsWith('/admin')) {
    return <Navbar />; // Admin navbar
  }

  // User routes should display the User Navbar
  return <NavbarBar />; // User navbar
};

// Main App component
const App = () => {
  const [bookings, setBookings] = useState([]); // State to hold bookings
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Effect to fetch booking data on component mount
  useEffect(() => {
    const loadBookings = async () => {
      try {
        const bookingsData = await fetchBookings(); // Fetch the booking data
        setBookings(bookingsData); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    loadBookings(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Router>
      <Navigation /> {/* Conditionally render navbar based on route */}
      <Routes>
        {/* Role selection screen */}
        <Route path="/" element={<LoginSelection />} />

        {/* Dynamic login routes based on the role selected (admin/user) */}
        <Route path="/login/:role" element={<Login />} />

        {/* Admin routes */}
        <Route path="/admin/admin-home" element={<AdminHome />} />
        <Route 
          path="/admin/manage-booking" 
          element={loading ? <div>Loading...</div> : <ManageBooking bookings={bookings} updateBookingStatus={updateBookingStatus} />} 
        />

        {/* User routes */}
        <Route path="/user/home" element={<Home />} />
        <Route path="/my-bookings" element={<MyBooking />} />

        {/* User booking route */}
        <Route path="/user/book" element={<UserBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
