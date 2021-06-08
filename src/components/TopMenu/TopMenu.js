import React from 'react';
import { NavLink } from 'react-router-dom';

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
               <h4>Demo Drop</h4>
                <ul>
                    {/*  <li>
                        <NavLink to="/" exact activeClassName="active-link">Sign in</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" exact activeClassName="active-link">Home</NavLink>
                    </li>*/}
                    <li>
                        <NavLink to="/profile" exact activeClassName="active-link">Profile</NavLink>
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