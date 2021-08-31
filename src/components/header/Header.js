import React from "react";
import "./Header.css";
import TopMenu from "../topMenu/TopMenu";




function Header() {
    return (
        <>
            <div className="header-container">
                <TopMenu/>
            </div>
        </>
    );
}

export default Header;