// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Account from "./components/Account";
import Register from "./components/Register";
import { AuthProvider } from "./AuthContext";
import Login from "./components/Login";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import About from "./components/About";

const App = () => {
  return (
    <AuthProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </div>
    </AuthProvider>
  );
};

export default App;
