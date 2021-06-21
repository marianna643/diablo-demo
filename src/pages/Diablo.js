import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import { Link } from 'react-router-dom';
import demoDrop from '../assets/demodrop.jpg';
import './Diablo.css';





function Diablo () {
    return (
    <div>
        <TopMenu/>
        <div className="image">
            <img src={demoDrop} alt= "" width="600" height="900" />
        </div>
        <div className="text-container">
            <h2 className="home-h2">"Drop it like it is hot"</h2>
            <Link to="/my-demos"><button type="button" className="demoNavigatie">
                I want to drop it
            </button>
            </Link>
        </div>
        <h5 className="home-h5">All demos are automatically submitted for the DIABLO STUDIO record label and Don Diablo’s radio show unless otherwise specified.</h5>
    </div>


    );
}

export default Diablo;