import  { useState } from 'react';
import UserBooking from '../user/UserBooking'; // Import UserBooking
import AdminManageBooking from '../admin/AdminManageBooking'; // Import AdminManageBooking

const BookingManager = () => {
  const [bookings, setBookings] = useState([]);

  // Add new booking request from user
  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  // Update booking status by admin
  const updateBookingStatus = (id, newStatus) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <div>
      {/* User Booking Form */}
      <UserBooking addBooking={addBooking} />

      {/* Admin Manage Booking Table */}
      <AdminManageBooking bookings={bookings} updateBookingStatus={updateBookingStatus} />
    </div>
  );
};

export default BookingManager;
