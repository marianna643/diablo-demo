import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const AuthContext = createContext({});

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
        localStorage.setItem('token', data.accessToken);
        setAuthState({
            ...authState,
            user: {
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                country: data.country,
                email: data.email,
                facebook: data.facebook,
                instagram: data.instagram,
                isAdmin: data.roles.includes("ROLE_ADMIN"),
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
        <AuthContext.Provider value={{ ...authState, login, logout}}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(AuthContext);
    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;
    const isAdmin = authState.user !== null && authState.user.isAdmin;

    return {
        ...authState,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin,
    }
}

export {
    AuthContext,
    useAuthState,
    AuthContextProvider,
}