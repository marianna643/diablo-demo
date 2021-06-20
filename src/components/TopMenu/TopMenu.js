import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
               <h4>Demo Drop</h4>
                <ul>
                    {/*<li>
                         <NavLink to="/" exact activeClassName="active-link">Sign in</NavLink>
                    </li>
                    <li>
                         <NavLink to="/home" activeClassName="active-link">Diablo</NavLink>
                    </li>*/}
                    <li>
                        <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                    </li>

                    <li>
                        <NavLink to="/my-demos" activeClassName="active-link">MyDemos</NavLink>
                    </li>

                    <li>
                        <NavLink to="/demo-upload" activeClassName="active-link">Demo Upload</NavLink>
                    </li>

                    <li>
                        <NavLink to="/sign-out" activeClassName="active-link">Sign out</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default TopMenu;