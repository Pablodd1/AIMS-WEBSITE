import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="w-full h-full">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="loading-svg"
      >
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke="#3182ce"
          strokeWidth="5"
          strokeLinecap="round"
          className="circle"
        />
      </svg>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
