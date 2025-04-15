import React from 'react';
import './style.globalbutton.css';

const GlobalButton = ({ text, handleClick }) => {
  return (
    <button className="global_button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default GlobalButton;