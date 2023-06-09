import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import Checkout from './components/Checkout';
import AccountPage from './components/AccountPage';
import HistoryPage from './components/HistoryPage';
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import ItemDetails from './components/ItemDetails';
import AddItem from './components/AddItem';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    // Logic to handle successful login
    setLoggedIn(true);
  };

  const displayItems = [
    {
      id: 1,
      name: 'Sample Product 1',
      price: '$19.99',
      category: 'Electronics',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Sample Product 2',
      price: '$29.99',
      category: 'Clothing',
      rating: 3.8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      name: 'Sample Product 3',
      price: '$9.99',
      category: 'Home Decor',
      rating: 4.2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const item = {
    id: 1,
    name: 'Example Item',
    price: '$9.99',
    description: 'This is an example item.',
    quantity: 10,
    image: null,
    category: 'Electronics',
  };

  return (
    <Router>
      {loggedIn && <Navbar username="JohnDoe" email="johndoe@example.com" balance={100000} />}
      <Routes>
        {loggedIn ? (
          // If logged in, display the routes
          <>
            <Route path="/Home" element={<Home items={displayItems} />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Account" element={<AccountPage />} />
            <Route path="/History" element={<HistoryPage />} />
            <Route path="/Category" element={<CategoryPage />} />
            <Route path="/ItemDetails/:id" element={<ItemDetails item={item} />} />
            <Route path="/AddItem" element={<AddItem />} />
            <Navigate to="/Home" replace /> {/* Redirect to home page */}
          </>
        ) : (
          // If not logged in, display the login and register pages
          <>
            <Route
              path="/"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route
              path="/Register"
              element={<RegisterPage onLogin={handleLogin} />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
}
