import React, {useEffect, useState} from 'react';
import {auth, db, registerWithEmailAndPassword} from "../firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {errorMessages} from "../firebase/errors.js";

const RegisterForm = () => {

    const params = new URLSearchParams(window.location.search);
    const registrationToken = params.get('token');

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    let [regError, setRegError] = useState('');

    const [user, loading, error] = useAuthState(auth);

    let navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) {
            if(role === "client"){
                navigate("/dashboards/client");
                console.log("CLIENT")
            }
            else if (role === "manager") navigate("/dashboards/manager");
        }
    }, [user, loading]);



    const isValidToken = async (token) => {
        try {
            // Create a reference to the "tokens" collection
            const tokensCollection = collection(db, 'tokens');

            // Create a query to search for the token
            const q = query(tokensCollection, where('value', '==', token));

            // Execute the query
            const querySnapshot = await getDocs(q);

            // Check if a document with the token exists
            if (querySnapshot.size === 1) {
                // Token is valid, retrieve the role from the document
                const docData = querySnapshot.docs[0].data();
                setRole(docData.role)
                return docData.role; // Return the role
            } else {
                return ''; // Token is not found or not unique
            }
        } catch (error) {
            console.error('Error checking token validity:', error);
            return ''; // Handle errors here
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const roleFromToken = await isValidToken(registrationToken);

        if (roleFromToken !== "") {

            registerWithEmailAndPassword(name, email, password, roleFromToken)
              .catch(error => setRegError(errorMessages(error.message)))

        } else {
            setRegError('Invalid registration token.');
        }
    };

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