import React from 'react'
import './LeftPanel.css';

function LeftPanel() {
    return (
        <div className='LeftPanel'>
            <div className='left'>
                <div className='panel'>
                    <a href='/Explore'> Home </a> <br/>
                    <a href='#'> Buy/Sell </a> <br/>
                    <a href='#'> Export Requests </a> <br/>
                    <a href='#'> Import Requests </a> <br/>
                </div>
            </div>
        </div>
    );
  }
  
export default LeftPanel;
  