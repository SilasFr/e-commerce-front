import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:category/:id" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
