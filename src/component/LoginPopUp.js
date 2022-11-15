import React from 'react';

import "./LoginPopUp.css"

function LoginPopUp() {
    return (

        <div className='card'>

                            
            <h1>Log in</h1>
            <hr width="75%"></hr>

            <div className='b1'>
                <label className='b1Labels'> Email Id </label><br/>
                <input type={'text'} className='inputs'/><br/><br/>

                <label className='b1Labels'> Password </label><br/>
                <input type={'text'} className='inputs'/><br/><br/>
            </div>

            <div className='b2'>
                <input type={'checkbox'} /> <label> Remebmer me </label>

                <a href='#'> Forgot password? </a>
            </div>

            <div className='b3'>
                <button>Login</button>
                <p>Don't have an account? <a>Sign up</a></p>
            </div>

        </div>
    );
}

export default LoginPopUp;

