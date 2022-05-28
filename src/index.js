import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7Si9BthYdahpSavtE6tmtFfe-IxhhmyA",
  authDomain: "coderhouse-e-commerce-6d4dc.firebaseapp.com",
  projectId: "coderhouse-e-commerce-6d4dc",
  storageBucket: "coderhouse-e-commerce-6d4dc.appspot.com",
  messagingSenderId: "193214901363",
  appId: "1:193214901363:web:cf0d62434d168bcadcce06"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
