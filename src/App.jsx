import React from "react";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/login/login";
import Signup from "./components/Signup/Signup";
import "./App.css";

function App() {
    return <div className ="App">
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/" element={<Home/>}/>

            </Routes>

        </Router>
    </div>
}
export default App;