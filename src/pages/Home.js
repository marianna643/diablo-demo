import React from 'react';
import Footer from './Footer';
import Popup from "../components/Popup";





    function HomePage() {
        return (
            <div className="background-container">
                <main>
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
                    <Popup trigger={true}>
                    </Popup>
                    <Footer/>
                </main>
            </div>
        );
    }

    export default HomePage;
