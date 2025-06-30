import React from 'react';

function Logo({width = '100px'}) {
  return (
    <div className="flex items-center justify-center" style={{width}}>
      <svg 
        width={width} 
        height={width} 
        viewBox="0 0 100 100" 
        className="text-indigo-400"
        fill="currentColor"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M30 40 Q50 20 70 40 Q50 60 30 40" fill="currentColor" opacity="0.7"/>
        <circle cx="50" cy="45" r="8" fill="currentColor"/>
        <text x="50" y="80" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">MP</text>
      </svg>
    </div>
  );
}

export default Logo;