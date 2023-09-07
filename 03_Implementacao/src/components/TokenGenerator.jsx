import React, {useCallback, useState} from 'react';
import { db } from '../firebase';
import {addDoc, collection, doc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

const TokenGenerator = () => {

    const [token, setToken] = useState('');
    const [registrationLink, setRegistrationLink] = useState('');

    let navigate = useNavigate();

    const generateToken = useCallback(() => {

        const registrationToken = Math.random().toString(36).substring(2);

        const registrationTokenObject = {
            value: registrationToken,
            role: "client"
        };

        const tokensCol = collection(db, 'tokens')
        addDoc(tokensCol, registrationTokenObject).then(() => {
            navigate("/dashboards/manager");
        });

        const link = `${window.location.origin}/?token=${registrationToken}`;

        setToken(registrationToken);
        setRegistrationLink(link);
    }, []);

    return (
        <div style={{display: "flex", alignItems: "center", gap: 15}}>
            <button style={{backgroundColor: "#d2e7d6", borderRadius: 10, padding: "5px 10px"}}
                    onClick={generateToken}>Gerar Convite</button>
            {registrationLink && (
                <p style={{border: " 2px solid #F2F2F2", borderRadius: 10, padding: "5px 10px"}}>
                    Link: <a href={registrationLink}>{registrationLink}</a>
                </p>
            )}
        </div>
    );
};

export default TokenGenerator;
