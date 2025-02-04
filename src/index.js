import React from 'react';
import ReactDOM from 'react-dom'; // Correct import path
import './index.css';
import './components/QRcode.css'; // Correct import path
import reportWebVitals from './reportWebVitals';
import { QrCode } from './components/QRcode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QrCode />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
