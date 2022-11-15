import React from 'react'
import NavBar from '../component/Navbar';
import './Profile.css';
import LeftPanel from '../component/LeftPanel';

function Profile() {
    return (
        
        <div className='.Profile'>
            <NavBar/>
            
            <div className='page'>
                
                <LeftPanel/>
                <div className='right'>
                    
                    <h1> Account Settings</h1>

                    <div className='ribbon'>
                        <a href='#'> My Profile </a>
                        <a href='#'> My Listings </a>
                        <a href='#'> My Actions </a>
                        <a href='#'> Other Settings </a>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;