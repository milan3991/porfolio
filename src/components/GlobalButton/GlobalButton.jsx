import React from 'react';
import './style.globalbutton.css';
import { Link } from 'react-router-dom';

const GlobalButton = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="global_button">
        {text}
      </button>
    </Link>
  );
};

export default GlobalButton;