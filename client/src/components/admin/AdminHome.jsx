import React from 'react';
import Navbar from './Navbar'; // Import the admin navbar
import './AdminHome.css';

const AdminHome = () => {
  return (
    <div>
      <Navbar /> {/* Display the admin navbar */}
      <h1>Admin Home</h1>
      {/* Add other content specific to the admin home */}
      <p>Welcome to the Admin Dashboard!</p>
    </div>
  );
};

export default AdminHome;
