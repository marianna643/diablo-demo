import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

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
                const response = await axios.get(`http://localhost:8081/api/users/`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                //Authstate annvullen door axios get
                setAuthState({
                    ...authState,
                    user: {
                        id: response.id,
                        username: response.username,
                        email: response.email,
                    },
                    status: 'done',
                });

                console.log(token)

            } catch (e) {
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

    function login(data) {

        //accestoken in de localstorage
        localStorage.setItem('token', data.accessToken);
        setAuthState({
            ...authState,
            user: {
                username: data.username,
                email: data.email,
                roles: data.roles,
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                country: data.country,
                facebook: data.facebook,
                instagram: data.instagram,
            }
        })
    }

    function logout() {
        //clear accestoken uit van localstorage
        localStorage.clear();
        setAuthState({
            ...authState,
            user: null,
        })
    }
    return (
        <authContext.Provider value={{ ...authState, login, logout}}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </authContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(authContext);
    const isDone = authState.status === 'done'; //geauthoriseerd wanneer status is done
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