import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
