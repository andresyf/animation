import React from 'react';
import logo from './logo.svg';
import './Animation.css';

function Animation() {
  return (
    <div className="Animation">
      <header className="Animation-header">
        <img src={logo} className="Animation-logo" alt="logo" />
        <p>
          <div class="main">
            <div class="box">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </p>
      </header>
    </div>
  );
}

export default Animation;
