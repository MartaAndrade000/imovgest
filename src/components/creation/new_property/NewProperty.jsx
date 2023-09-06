import React, {useCallback, useState} from 'react';
import TabLayout from '../../ui/TabLayout.jsx';

import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";
import InsuranceContent from "./InsuranceContent.jsx";
import PhotosContent from "./PhotosContent.jsx";
import DocumentsContent from "../DocumentsContent.jsx";
import ContactsForm from "../ContactsForm.jsx";

import * as PropTypes from "prop-types";
import OwnerContent from "./OwnerContent.jsx";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import {auth, db,} from "../../../firebase.js";
import {useNavigate} from "react-router-dom";

ContactsForm.propTypes = {emergency: PropTypes.bool};

function NewProperty() {

    let [state, setState] = useState({
        generalInfo: {},
        additionalInfo: {},
        owner: {},
        insurance: {},
        photos: {},
        contacts: {},
        documents: {}
    });

    let navigate = useNavigate();



    const handleSubmit = (section) => (data) => {
        console.log('Form data submitted:', data);
        setState((oldState) => {
            const newState = {...oldState};
            newState[section] = data;
            return newState;
        });

    };


    const saveData = useCallback(() => {
        console.log("State", state)
        const propertiesCol = collection(db, 'properties')
        addDoc(propertiesCol, state).then(() => {
            navigate("/dashboards/manager");
        })
    }, [state]);



    const sections = [
        {
            id: 'generalInfo',
            title: 'Informações Geral',
            content: <GeneralContent onSubmit={handleSubmit("generalInfo")}/>
        },
        {
            id: 'additionalInfo',
            title: 'Informações Adicionais',
            content: <AdditionalContent onSubmit={handleSubmit("additionalInfo")}/>
        },
        {id: 'owner', title: 'Proprietário', content: <OwnerContent onSubmit={handleSubmit("owner")}/>},
        {
            id: 'insurance',
            title: 'Certificados e Seguros',
            content: <InsuranceContent onSubmit={handleSubmit("insurance")}/>
        },
        {id: 'photos', title: 'Fotografias', content: <PhotosContent onSubmit={handleSubmit("photos")}/>},
        {
            id: 'contacts',
            title: 'Contactos',
            content: <ContactsForm emergency={false} onSubmit={handleSubmit("contacts")}/>
        },
        {id: 'documents', title: 'Documentos', content: <DocumentsContent onSubmit={handleSubmit("documents")}/>},
    ];

    return (
        <div className={"main-container"}>
            <TabLayout sections={sections}>
                <div className="button-container final">
                    <button className={"doc-button save"} onClick={saveData}>
                        Publish
                    </button>
                </div>
            </TabLayout>
        </div>
    );
}

export default NewProperty;
