import React from 'react';
import { Link } from 'react-router-dom'; 
import NavbarBar from './NavbarBar'; // Import the NavbarBar
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <NavbarBar /> {/* Add the NavbarBar here */}
            <header className="header">
                <h1>Welcome to the Seminar Hall Booking System</h1>
                <p>Your one-stop solution for booking seminar halls efficiently.</p>
            </header>
            <main className="main-content">
                <section className="info-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <Link to="/my-bookings" className="nav-link">
                                My Bookings
                            </Link>
                        </li>
                        <li>
                            <Link to="/view-hall" className="nav-link">
                                View Hall
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="about-section">
                    <h2>About Us</h2>
                    <p>
                        We aim to streamline the seminar hall booking process for students and faculty. 
                        Our system allows you to easily view available halls, make reservations, and manage your bookings.
                    </p>
                </section>
                <section className="contact-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out!</p>
                    <p>Email: support@seminarbooking.com</p>
                    <p>Phone: (123) 456-7890</p>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Seminar Hall Booking System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
