import React from 'react';
import './Studio.css';

function Studio() {
  return (
    <div className="studio-page">
      <div className="studio-main">
        <div className="studio-video-bg">
          <div className="studio-video"></div>
          <div className="studio-video-strip"></div>
        </div>
        <div className="timeline"></div>
        <div className="studio-side-panel"></div>
      </div>
    </div>
  );
}

export default Studio;
