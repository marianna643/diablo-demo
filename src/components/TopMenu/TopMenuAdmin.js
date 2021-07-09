import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './TopMenu.css';
import {AuthContext, useAuthState} from "../context/AuthContext";
import {useContext} from "react";

function TopMenu() {

    const { logout } = useContext(AuthContext);
    const { isAuthenticated, } = useAuthState();
    const history = useHistory();

    return (
        <nav>
            <div className="nav-container">
                <h4>Demo Drop</h4>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                    </li>

                    <li>
                        <NavLink to="/my-demos" activeClassName="active-link">Demos</NavLink>
                    </li>

                    <li>
                        {isAuthenticated ? (
                            <NavLink to="/sign-out" activeClassName="active-link" onClick={() =>logout()}>Sign out</NavLink>
                        ):(
                            history.push("/sign-out")
                        )}
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default TopMenu;