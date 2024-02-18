import React from 'react';

const GuideLine = ({ long, length, angle }) => {
  // Calculate coordinates for the starting and ending points of the line
  const startX = 0;
  const startY = 0;
  const endX = long;
  const endY = 0;

  // Calculate the coordinates for the bend point
  const bendX = long - length;
  const bendY = -Math.tan(angle * Math.PI / 180) * length;

  return (
    <svg width={long} height={Math.abs(bendY)} viewBox={`0 0 ${long} ${Math.abs(bendY)}`}>
      <line x1={startX} y1={startY} x2={endX} y2={endY} stroke="black" strokeWidth="2" />
      <circle cx={startX} cy={startY} r={5} fill="black" />
      <circle cx={endX} cy={endY} r={2} fill="black" />
      <line x1={bendX} y1={bendY} x2={endX} y2={endY} style={`rotate-x:${angle}deg`} stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default GuideLine;
