import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import React from "react";
import Home from "./pages/Home";
import Diablo from './pages/Diablo';
import Profile from './pages/Profile';
import MyDemos from './pages/MyDemos';
import DemoUpload from './pages/DemoUpload';
import SignOut from './pages/SignOut';
import TermsOfService from "./pages/TermsOfService";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import './App.css';
import Demos from "./pages/Demos";
import PrivateRouting from "../src/routing/PrivateRouting";





function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <PrivateRoute exact path="/">
                        < Diablo />
                    </PrivateRoute>
                    <PrivateRoute path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute path="/demo-upload">
                        <DemoUpload />
                    </PrivateRoute>
                    <PrivateRoute path="/my-demos">
                        <MyDemos />
                    </PrivateRoute>
                    <PrivateRoute path="/review">
                        <ReviewPage/>
                    </PrivateRoute>
                    <PrivateRoute path="/all-demos">
                        <AdminAllDemos/>
                    </PrivateRoute>
                    <Route path="/sign-out">
                        <SignOut />
                    </Route>
                    <Route path="/signup">
                        <RegisterPage/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/terms-service">
                        <TermsOfService />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
