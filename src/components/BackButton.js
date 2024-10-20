import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './BackButton.css'; // Import custom CSS

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <button 
      className="back-button" // Custom class
      onClick={handleBack}
    >
      Back
    </button>
  );
};

export default BackButton;

