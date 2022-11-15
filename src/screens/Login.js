import React from 'react';
import NavBar from '../component/Navbar';
import logo from '../assets/Login_bkg.png';
import "./Login.css"
// import NavBar from './component/Navbar';
import LoginPopUp from '../component/LoginPopUp';

function Login() {
    return (
        
        <div className='.Login'>
            <NavBar/>
            

            <div className='page'>

            <LoginPopUp/>


            </div>




        </div>
    );
}

export default Login;