import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
<<<<<<< HEAD
import Category from "./pages/Category.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:category/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
=======
import Home from "./pages/HomePage.jsx";
import { AuthProvider } from "./contexts/AuthContext.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:category/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
>>>>>>> 1be66ee403683be5231b85233a6831c802f03662
  );
}

export default App;
