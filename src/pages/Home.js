import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
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
        </div>
    </div>


    );
}

export default Home;