import React from 'react';
import Register from "../components/Login-Register/Register";
import {Link} from "react-router-dom";
import './Home.css';
import {useHistory} from "react-router-dom";



function RegisterPage () {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [country, setCountry] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');

        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/api/auth/signup', {
                username: username,
                email: email,
                password: password,
                role: ["user"],
            });

            if (response.status === 200) {
                setCreateUserSuccess(true);
            }
        } catch(e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('User already exists');
            } else {
                setError('Something went wrong while fetching data');
            }
        }
        toggleLoading(false);
    }


    return (
        <>  <div className="background-container">
            <title className="titel-1">Diablo Studio</title>
            <title className="titel-2">Demo Drop</title>
            <div className="button-container">
                <div className="copyright">
                    <Link className="termsLink" to="/terms-service"> Terms of Service </Link>
                    <p>@2021 Demo Drop</p>
                </div>
                <div className="form-container">
                    {createUserSuccess === true && <p>User is created!</p>}
                    <form className="signUp-form" onSubmit={onSubmit}>
                        <h3 className="popup-h3">Sign up</h3>
                        <label className="sign-lab" htmlFor="username-field">
                            Username: * </label>
                        <input className="sign-input"
                               type="text"
                               id="username-field"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}>
                        </input>
                        <label className="sign-lab" htmlFor="firstName-field">
                            First name: * </label>
                        <input className="sign-input"
                               type="text"
                               id="firstName-field"
                               value={firstname}
                               onChange={(e) => setFirstname(e.target.value)}>
                        </input>

                        <label className="sign-lab" htmlFor="lastName-field">
                            Last name: * </label>
                        <input className="sign-input"
                               type="text"
                               id="lastName-field"
                               value={lastname}
                               onChange={(e) => setLastname(e.target.value)}>
                        </input>

                        <label className="sign-lab" htmlFor="country-field">
                            Country: * </label>
                        <input className="sign-input"
                               type="text"
                               id="country-field"
                               value={country}
                               onChange={(e) => setCountry(e.target.value)}>
                        </input>

                        <label className="sign-lab" htmlFor="email-field">
                            Email address: * </label>
                        <input className="sign-input"
                               type="email"
                               id="email-field"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}>
                        </input>

                        <label className="sign-lab" htmlFor="password-field">
                            Password: * </label>
                        <input className="sign-input"
                               type="password"
                               id="password-field"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}>
                        </input>

                        <label className="sign-lab" htmlFor="facebook-field">
                            Facebook: </label>
                        <input className="sign-input"
                               type="text"
                               id="facebook-field"
                               value={facebook}
                               onChange={(e) => setFacebook(e.target.value)}>
                        </input>

                        <label className="sign-lab" htmlFor="instagram-field">
                            Instagram: </label>
                        <input className="sign-input"
                               type="text"
                               id="instagram-field"
                               value={instagram}
                               onChange={(e) => setInstagram(e.target.value)}>
                        </input>
                        <button type="submit" className="sign-btn" disabled={loading}>
                            {loading ? "signing up" : "Sign Up"}
                        </button>
                        {error && <p>{error}</p>}
                        <p className="paragraph-form">Do you have an account? <Link className="signIn-link"to="/login">Sign In</Link>{" "} </p>
                    </form>
                </div>
            </div>
        </div>
            );
            }

        </>
    )
}


export default RegisterPage;


