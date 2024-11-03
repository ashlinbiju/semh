// src/components/shared/LoginSelection.jsx
 import { useNavigate } from 'react-router-dom';
 import './LoginSelection.css'; // CSS import without alias
 const LoginSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    navigate(`/login/${role}`); // Navigate to the login page with the selected role (admin or user)
  };

  return (
    <div className="login-selection-container">
      <h1>Select your role</h1>
      <div className="login-options">
        <button className="login-btn" onClick={() => handleSelection('admin')}>Login as Admin</button>
        <button className="login-btn" onClick={() => handleSelection('user')}>Login as User</button>
      </div>
    </div>
  );
};

export default LoginSelection;
