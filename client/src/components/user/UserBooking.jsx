import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom';

const UserBooking = ({ addBooking }) => {
  const [name, setName] = useState('');
  const [hall, setHall] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!addBooking) {
      console.error('addBooking function is not provided.');
      return;
    }

    const newBooking = {
      id: Date.now(), // unique ID for each booking
      name,
      hall,
      date,
      status: 'Pending', // Default status for new requests
    };

    addBooking(newBooking);
    navigate('/user/home');
  };

  return (
    <div className="user-booking-form">
      <h2>Request a Booking</h2>
      <form onSubmit={handleBookingSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={hall} onChange={(e) => setHall(e.target.value)} required>
          <option value="">Select a Hall</option>
          <option value="Hall A">Hall A</option>
          <option value="Hall B">Hall B</option>
          <option value="Hall C">Hall C</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

// Define PropTypes to enforce the presence of addBooking as a function
UserBooking.propTypes = {
  addBooking: PropTypes.func.isRequired,
};

export default UserBooking;
