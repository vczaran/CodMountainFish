import React from 'react';

const Focus = ({ top, height }) => {

    const bottom = top + height;


  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%', 
    height: '100%',
    pointerEvents: 'none',
    background: 'rgba(0,0,0,0.5)',
    display: 'block',
    cclipPath: `polygon(0 0, 100% 0, 100% ${top}px, 0 ${top}px), polygon(0 ${bottom}px, 100% ${bottom}px, 100% 100%, 0 100%)`,

  };

  return <div style={overlayStyle} />;
}

export default Focus;
