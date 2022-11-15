import React from 'react'
import './Template.css';
import NavBar from './Navbar';
import LeftPanel from './LeftPanel'
function Template() {
    return (
        <div className='Template'>
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
  