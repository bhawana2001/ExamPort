import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import LoginService from './Services/LoginService';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // const token = localStorageService.getAccessToken()
    const token = LoginService.getToken();
    console.log("Inside interceptor");
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      config.headers['Authorization'] = 'Bearer ' + token
    }
    config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
