import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSelection.css'; // Make sure to import your CSS file

const LoginSelection = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleAdminLogin = () => {
        navigate('/admin/admin-home'); // Redirect to the admin home
    };

    const handleUserLogin = () => {
        navigate('/user/home'); // Redirect to the user home (if you have one)
    };

    return (
        <div className="login-selection-container">
            <h1>Who is logging in?</h1>
            <div className="login-options">
                <button className="login-btn" onClick={handleAdminLogin}>Admin</button>
                <button className="login-btn" onClick={handleUserLogin}>User</button>
            </div>
        </div>
    );
};

export default LoginSelection;
