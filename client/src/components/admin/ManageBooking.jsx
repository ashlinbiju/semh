import React from 'react';
import { Link } from 'react-router-dom';
import './ManageBooking.css'; // Ensure this file exists

const ManageBooking = () => {
  return (
    <div className="manage-booking-container">
      <h2>Manage Booking Requests</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking Request</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Request 1: John Doe requests Hall A on October 25, 2024.</td>
            <td>
              <button className="accept-btn">Accept</button>
              <button className="decline-btn">Decline</button>
            </td>
          </tr>
          <tr>
            <td>Request 2: Jane Smith requests Hall B on October 26, 2024.</td>
            <td>
              <button className="accept-btn">Accept</button>
              <button className="decline-btn">Decline</button>
            </td>
          </tr>
          <tr>
            <td>Request 3: Michael Brown requests Hall C on October 27, 2024.</td>
            <td>
              <button className="accept-btn">Accept</button>
              <button className="decline-btn">Decline</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooking;
