import React, {useState} from 'react';
import './Navbar.css';
import Login from '../screens/Login';
import App from '../App';
import logoBig from '../assets/Picture1.png';
import logoMobile from '../assets/logo-final-spiral.png';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='NavBar'>
            <div className='logodiv'>
            <a href='/'><img src={logoBig} className="logoimg"/></a>
            <img src={logoMobile} className="logoimgMobile"/>
            </div>

            <div className='rightBtnsDiv'>
                <div className='links' id={showLinks ? "hide" : ""}>
                    
                    {/* <BrowserRouter> */}
                    
                    {/* <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    </BrowserRouter> */}
                    
                    
                    
                    <a href='/Explore'> Explore </a>
                    <a href='#'> About Us </a>
                    <a href='/signup'> Sign Up </a>
                    <a href='/login'> Login </a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>Navigation</button>
            </div>
        </div>
    );
}



export default Navbar;