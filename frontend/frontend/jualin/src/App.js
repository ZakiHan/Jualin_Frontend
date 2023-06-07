import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Checkout from './components/Checkout';
import AccountPage from './components/AccountPage';
import HistoryPage from './components/HistoryPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';

export default function App() {
  return (
    <Router>
      <Navbar username="JohnDoe" email="johndoe@example.com" balance={100000} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/AccountPage" element={<AccountPage />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}