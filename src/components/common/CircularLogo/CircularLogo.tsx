"use client";

import React from 'react';

interface CircularLogoProps {
  text?: string;
  size?: number;
  color?: string;
}

export const CircularLogo = ({
  text = "Yellow Estate",
  size = 48,
  color = "currentColor"
}: CircularLogoProps) => {
  const radius = size / 3;

  return (
    <div 
      className="circular-text" 
      style={{ 
        width: size, 
        height: size,
        color: color
      }}
    >
      <svg viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <path
            id="circle-path"
            d={`
              M ${size/2},${size/2}
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${radius*2},0
              a ${radius},${radius} 0 1,1 -${radius*2},0
            `}
            fill="none"
          />
        </defs>
        <text className="font-bold">
          <textPath
            href="#circle-path"
            startOffset="0"
            style={{
              fontSize: size / 5,
              letterSpacing: '2px',
            }}
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}; 