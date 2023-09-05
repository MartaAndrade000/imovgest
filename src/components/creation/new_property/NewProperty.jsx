import React, {useState} from 'react';
import TabLayout from '../../ui/TabLayout.jsx';

import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";
import InsuranceContent from "./InsuranceContent.jsx";
import PhotosContent from "./PhotosContent.jsx";
import DocumentsContent from "./DocumentsContent.jsx";
import ContactsForm from "../ContactsForm.jsx";

import * as PropTypes from "prop-types";
import OwnerContent from "./OwnerContent.jsx";
ContactsForm.propTypes = {emergency: PropTypes.bool};

function NewProperty() {

    let [state, setState] = useState({});

    const handleSubmit  = (section) => (data) => {
        console.log('Form data submitted:', data);
        setState((oldState) => {
            const newState = {...oldState};
            newState[section] = data;
            return newState;
        })
    };

    console.log("State", state)

    const sections = [
        { id: 'generalInfo', title: 'Informações Geral', content: <GeneralContent onSubmit={handleSubmit("generalInfo")}/> },
        { id: 'additionalInfo', title: 'Informações Adicionais', content:<AdditionalContent onSubmit={handleSubmit("additionalInfo") }/> },
        { id: 'owner', title: 'Proprietário', content: <OwnerContent onSubmit={handleSubmit("owner")}/>},
        { id: 'certificates-and-insurance', title: 'Certificados e Seguros', content: <InsuranceContent onSubmit={handleSubmit("insurance")}/> },
        { id: 'photos', title: 'Fotografias', content: <PhotosContent onSubmit={handleSubmit("photos")}/> },
        { id: 'contacts', title: 'Contactos', content: <ContactsForm emergency={false} onSubmit={handleSubmit("contacts")}/> },
        { id: 'documents', title: 'Documentos', content: <DocumentsContent onSubmit={handleSubmit("documents")}/> },
    ];

    return (
        <div className={"main-container"}>
            <TabLayout sections={sections} />
        </div>
    );
}

export default NewProperty;
