import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NthApp from './NthApp';
import reportWebVitals from './reportWebVitals';

const NthRoot = ReactDOM.createRoot(document.getElementById('NthRoot'));
NthRoot.render(
  <React.StrictMode>
    <NthApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
