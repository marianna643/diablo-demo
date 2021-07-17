import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';
import { useContext, useState }  from 'react';
import { useHistory } from "react-router-dom";
import {authContext, useAuthState } from "../context/AuthContext";


function TopMenu() {

    const history = useHistory();
    const { logout } = useContext(authContext);
    const { isAuthenticated } = useAuthState();


    return (
        <nav>
            <div className="nav-container">
                <li>
                    <NavLink className="home-pagina" to="/" activeClassName="active-link">Demo Drop</NavLink>
                </li>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/demo-upload" activeClassName="active-link">Demo Upload</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-demos" activeClassName="active-link">MyDemos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all-demos" activeClassName="active-link">Review</NavLink>
                    </li>
                    {isAuthenticated ? (
                        <NavLink to="/sign-out" activeClassName="active-link" onClick={() =>logout()}>Sign out</NavLink>
                    ) : (
                        history.push("/sign-out")

                    )}
                </ul>

            </div>
        </nav>
    );
}

export default TopMenu;