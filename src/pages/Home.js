import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import { Link } from 'react-router-dom';
import demoDrop from '../assets/demodrop.jpg';
import './Home.css';





function Home () {
    return (
    <div>
        <TopMenu/>
        <div className="image">
            <img src={demoDrop} width="600" height="900" />
        </div>
        <div className="text-container">
            <h2>"Drop it like it is hot"</h2>
            <button type="button" className="demoNavigatie"  as={Link} to="/home"> I want to drop it </button>
        </div>
        <h5>All demos are automatically submitted for the DIABLO STUDIO record label and Don Diablo’s radio show unless otherwise specified.</h5>
    </div>


    );
}

export default Home;