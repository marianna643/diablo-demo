import "./Footer.css";
import {Link} from "react-router-dom";
import React from "react";



export default function Footer() {

    return (
        <>
            <div className="footer-position-container">
                <div className="footer-container">
                    <section className="footer-section">
                        <div className="h1">Privacy</div>
                        <div className="privacy">
                            <span>DiabloDemo2021 ©</span>
                            <span className="separator">|</span>
                            <span>All rights reserved</span>
                        </div>
                        <Link className="termsLink" to="/terms-service"> Terms of Service </Link>
                    </section>
                    <section className="footer-section">
                        <div className="h1">Contact</div>
                        <span>DonDiablo DemoDrop</span>
                        <ul className="contact-container">
                            <li><p><strong>email: </strong>dondiablo@demodrop.com</p></li>
                            <li><p><strong>phone: </strong> +31-655-5387-30</p></li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}