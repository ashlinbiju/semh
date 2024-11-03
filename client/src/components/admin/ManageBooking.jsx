
import PropTypes from 'prop-types';
import './ManageBooking.css'; // Ensure this file exists

const ManageBooking = ({ bookings, updateBookingStatus }) => {
  return (
    <div className="manage-booking-container">
      <h2>Manage Booking Requests</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking Request</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="3">No booking requests found</td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{`${booking.name} requests ${booking.hall} on ${booking.date}`}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === 'Pending' && (
                    <>
                      <button
                        className="accept-btn"
                        onClick={() => updateBookingStatus(booking.id, 'Approved')}
                      >
                        Accept
                      </button>
                      <button
                        className="decline-btn"
                        onClick={() => updateBookingStatus(booking.id, 'Declined')}
                      >
                        Decline
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes validation
ManageBooking.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // ID must be a number and required
      name: PropTypes.string.isRequired, // Name must be a string and required
      hall: PropTypes.string.isRequired, // Hall must be a string and required
      date: PropTypes.string.isRequired, // Date must be a string and required
      status: PropTypes.string.isRequired, // Status must be a string and required
    })
  ).isRequired, // bookings should be an array of objects, and it's required
  updateBookingStatus: PropTypes.func.isRequired, // updateBookingStatus should be a function and is required
};

export default ManageBooking;
