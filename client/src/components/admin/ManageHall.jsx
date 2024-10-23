import React from 'react';
import './ManageHall.css'; 

const ManageHall = () => {
    // Example hall data
    const halls = [
        { id: 1, name: "Seminar Hall 1", status: "Booked" },
        { id: 2, name: "Seminar Hall 2", status: "Booked" },
        { id: 3, name: "Seminar Hall 3", status: "Booked" },
        // Add more halls as needed
    ];

    return (
        <div className="manage-hall-container">
            <h1>Manage Halls</h1>
            <ol className="hall-list">
                {halls.map(hall => (
                    <li key={hall.id}>
                        {hall.name} - {hall.status}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ManageHall;
