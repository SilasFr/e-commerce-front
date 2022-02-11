import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import Home from "./pages/HomePage.jsx";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;