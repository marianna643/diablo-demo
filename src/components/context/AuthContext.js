import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const authContext = createContext({});

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
        user: null,
    })

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getUserInfo() {
            try {

                const response = await axios.get('http://localhost:3000/600/users/${id}', {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    }
                );

                console.log(response);


                setAuthState({
                    ...authState,
                    user: {
                        id: response.id,
                        username: response.username,
                        email: response.email,
                    },
                    status: 'done',
                });

            } catch (e) {

                console.log("kan gegevens niet ophalen");
                setAuthState({
                    ...authState,
                    user: null,
                    error: e,
                    status: 'done'
                });
            }
        }


        if (authState.user === null && token) {
            getUserInfo();
        } else {

            setAuthState({
                ...authState,
                error: null,
                user: null,
                status: 'done'
            });
        }
    }, []);

    function login(data){
        localStorage.setItem('token',data.accessToken);

        setAuthState({
            ...authState,
            user:{
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                country: data.country,
                email: data.email,
                facebook: data.facebook,
                instagram: data.instagram,
                roles: data.roles

            }
        })
    }

    function logout() {
        localStorage.clear();
        setAuthState({
            ...authState,
            user: null,
        })
    }


    return (
        <authContext.Provider value={{ ...authState, login, logout }}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </authContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(authContext);


    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;


    return {
        ...authState,
        isAuthenticated: isAuthenticated,
    }
}

export {
    authContext,
    useAuthState,
    AuthContextProvider,
}
