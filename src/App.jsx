import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import Banner from "./pages/Banner.jsx";
import Home from "./pages/HomePage.jsx";
import { AuthProvider } from "./contexts/AuthContext.js";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:category/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
