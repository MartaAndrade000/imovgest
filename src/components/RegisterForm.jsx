import React, {useEffect, useState} from 'react';
import {auth, registerWithEmailAndPassword} from "../firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {errorMessages} from "../firebase/errors.js";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [regError, setRegError] = useState('');

    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboards/manager");
    }, [user, loading]);
    const handleSubmit = (event) => {
        event.preventDefault();
        registerWithEmailAndPassword(name, email, password)
            .catch(error => setRegError(errorMessages(error.message)))
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className={"header"}>
                <div className={"app-logo"}></div>
                <div className={"intro"}>We are the Imovegest Team</div>
            </div>
            <p>Please register your information</p>
            <input type="text" id="username" name="username" placeholder={"Username"}
                   value={username} onChange={(event) => setUsername(event.target.value)}
                   required/>
            <input type="email" id="email" name="email"
                   onChange={(event) => setEmail(event.target.value)} placeholder={"Email"}
                   value={email} required/>
            <input type="password" id="password" name="password"
                   onChange={(event) => setPassword(event.target.value)}
                   value={password}
                   placeholder={"Password"} required/>
            {(error || regError) && (<div className={"error_message"}>{error ? error : regError}</div>)}
            <button type="submit">Register</button>
            <p className={"alternative"}>Or sign up in with:</p>
            <div className={"google logo dark"}></div>
        </form>
    );
}

export default RegisterForm;