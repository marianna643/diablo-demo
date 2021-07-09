import React from 'react';
import  {useAuthState}  from '../components/context/AuthContext';
import { Redirect, Route } from 'react-router-dom';

function PrivateRouting ({ children, ...rest }) {
    const { isAuthenticated } = useAuthState();

    return (
        <Route {...rest} render={() => {
            return isAuthenticated ? children : <Redirect to="/login"/>
        }}/>
    );
}

export default PrivateRouting;
