import React,{useEffect,useState} from "react";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/login/login";
import Signup from "./components/Signup/Signup";
import "./App.css";
import {auth} from "./firebase";

function App() {
    const [userName,setUserName]=useState("");
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName);
            }else setUserName("");
          
        });
},[]);
    return <div className ="App">
        
        
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/" element={<Home name={userName}/>}/>

            </Routes>

        </Router>
    </div>
}
export default App;