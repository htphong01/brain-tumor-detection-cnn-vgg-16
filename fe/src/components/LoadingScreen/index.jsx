import React from 'react';
import './styles.css';

function LoadingScreen(props) {
  return (
    <div id="loading-wrapper">
      <div id="loading-text">LOADING</div>
      <div id="loading-content"></div>
    </div>
  );
}

export default LoadingScreen;
