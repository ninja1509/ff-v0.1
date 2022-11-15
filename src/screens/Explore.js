import React from 'react'
import './Explore.css';
import NavBar from '../component/Navbar';
import LeftPanel from '../component/LeftPanel'
function Explore() {
    return (
        <div className='Explore'>
            <NavBar/>
  
            <div className="row">
  <div className="column left">
    <LeftPanel/>
  </div>
  <div className="column right" >
    <h1>Products</h1>
    <p>Some text..</p>
    <div>
      sjdkfhnc
    </div>
  </div>
</div>
            
        </div>
    );
  }
  
export default Explore;
  