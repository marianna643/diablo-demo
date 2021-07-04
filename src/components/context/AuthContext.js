import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const authContext = createContext({});

function AuthContextProvider({ children }) {
    const history = useHistory();
    const [authState, setAuthState] = useState({ user: null, status: "pending" });

    useEffect(() => {
        // @todo we proberen automatische in te loggen wanneer we nog een token hebben (later)
        // setTimeout(() => setAuthState({ user: null, status: "done" }), 2000);
        const token = localStorage.getItem("token");
        if (token) {
            login(token);
        } else {
            setAuthState({ user: null, status: "done" });
            history.push("/");
        }
    }, []);

    async function getUserData(id, token) {
        setAuthState({ user: null, status: "pending" });
        try {
            const response = await axios.get(
                `http://localhost:3000/600/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setAuthState({ user: response.data, status: "done" });
           // history.push("/profile");

            // Authorized POST request
            // const response2 = await axios.post(
            //   "http://localhost:3000/600/users",
            //   {
            //     email: "kees@kees.com",
            //     password: "abcd1234",
            //   },
            //   {
            //     headers: {
            //       Authorization: `Bearer ${token}`,
            //     },
            //   }
            // );
            // console.log("USER DATA:", response2);
        } catch (error) {}
    }

    async function login(token) {
        // console.log("DO WE HAVE A TOKEN NAO?", token);
        localStorage.setItem("token", token);
        const dataFromToken = jwt_decode(token);
        // console.log("WHAT IS IN THIS TOKEN THIING?", dataFromToken.sub);
        const userId = dataFromToken.sub;

        getUserData(userId, token);
    }

    function logout() {
        // @todo
        localStorage.removeItem("token");
        setAuthState({ user: null, status: "done" });
        history.push("/");
    }

    // deze data maken we beschikbaar in de context
    const data = { authState: authState, login: login, logout: logout };

    return (
        <authContext.Provider value={data}>
            {/* Hier komt de rest van onze app */}
            {authState.status === "pending" && <h1>Fetching you data! Hold on</h1>}
            {authState.status === "done" && children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;


