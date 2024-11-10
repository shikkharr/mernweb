import React from 'react';

const ScrollButton = ({ targetRef }) => {
  const handleClick = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick}>Scroll Down</button>
  );
};

export default ScrollButton;
