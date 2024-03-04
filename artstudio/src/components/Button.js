import React, { useState } from 'react';
import './Button.css';

function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className={`animated-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Click Me
    </button>
  );
}

export default AnimatedButton;