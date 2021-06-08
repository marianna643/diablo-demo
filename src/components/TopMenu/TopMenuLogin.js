import React from 'react';
import { NavLink } from 'react-router-dom';

function TopMenuLogin() {
    return (
        <nav>
            <div className="nav-container">
                <h4>Demo Drop</h4>
                <ul>
                    <li>
                        <NavLink to="/home" exact activeClassName="active-link">Home</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default TopMenuLogin;