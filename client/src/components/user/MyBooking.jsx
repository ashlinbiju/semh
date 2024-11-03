import React, { useState, useEffect } from 'react';
import './MyBooking.css';

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);

    // Fetch user bookings (Replace with actual API call)
    useEffect(() => {
        // Mock bookings data, replace with actual data fetching logic
        const mockBookings = [
            { id: 1, hallName: 'Hall A', date: '2024-10-25', time: '10:00 AM - 12:00 PM', status: 'Approved' },
            { id: 2, hallName: 'Hall B', date: '2024-11-10', time: '2:00 PM - 4:00 PM', status: 'Pending' },
            { id: 3, hallName: 'Hall C', date: '2024-11-12', time: '9:00 AM - 11:00 AM', status: 'Rejected' },
            { id: 4, hallName: 'Hall D', date: '2024-12-01', time: '11:00 AM - 1:00 PM', status: 'Approved' },
        ];
        setBookings(mockBookings);
    }, []);

    // Function to cancel booking
    const cancelBooking = (id) => {
        const updatedBookings = bookings.filter(booking => booking.id !== id);
        setBookings(updatedBookings);
        alert('Booking canceled successfully');
    };

    return (
        <div className="my-bookings-container">
            <h1 className="page-title">My Bookings</h1>
            <div className="bookings-list">
                {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <div key={booking.id} className="booking-item">
                            <h3>{booking.hallName}</h3>
                            <p>Date: {booking.date}</p>
                            <p>Time: {booking.time}</p>
                            <p>Status: <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></p>
                            <button className="cancel-btn" onClick={() => cancelBooking(booking.id)}>Cancel Booking</button>
                        </div>
                    ))
                ) : (
                    <p className="no-bookings">You have no bookings yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyBooking;
