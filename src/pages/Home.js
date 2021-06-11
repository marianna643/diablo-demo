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
    </div>


    );
}

export default Home;