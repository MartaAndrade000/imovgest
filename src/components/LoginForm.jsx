import React, {useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword} from "../firebase";
import {useNavigate, useNavigation} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {errorMessages} from "../firebase/errors.js";

const LoginForm = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const [role, setRole] = useState('');

    let navigate = useNavigate();

    /*
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/dashboards/client");

    }, [user, loading]);

     */

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/dashboards/");

    }, [user, loading]);


    const handleSubmit = (e) => {
        e.preventDefault();

        logInWithEmailAndPassword(email, password).then(r => {

        });
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className={"header"}>
                <div className={"app-logo"}></div>
                <div className={"intro"}>We are the Imovegest Team</div>
            </div>
            <p>Please login to your account</p>
            <input type="email" id="email_login" name="email" placeholder={"Email"} required
                   onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" id="password_login" name="password" placeholder={"Password"}
                   onChange={(event) => setPassword(event.target.value)} required/>
            <p className={"grey-p"}>Forgot your password?</p>
            <button type="submit" className={"light"}>Login</button>
            <p className={"alternative"}>Or sign in with:</p>
            <div className={"google logo"}></div>
        </form>
    );
}

export default LoginForm;