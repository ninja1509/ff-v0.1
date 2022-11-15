import React from 'react'
import NavBar from '../component/Navbar';

function SignUp() {
  return (
    <div className='.SignUp'>
        <NavBar/>    
        <div className='page'>

            <div className='card'>
                   
                <h1>SignUp</h1>

                <div className='b1'>

                    <label> First Name </label><br/>
                    <input type={'text'}/><br/><br/>

                    <label> Last Name </label><br/>
                    <input type={'text'}/><br/><br/>

                    <label> Email Id </label><br/>
                    <input type={'text'}/><br/><br/>

                    <label> Password </label><br/>
                    <input type={'text'}/><br/><br/>

                </div>

                <div className='b2'>
                    <input type={'checkbox'} /> <label> Rememer me </label>

                    <a href='#'> Forgot password? </a>
                </div>

                <div className='b3'>
                <button>Login</button>
                <p>Don't have an account? <a>Sign up</a></p>
                </div>
           </div>

        </div>


    </div>
  )
}


export default SignUp
