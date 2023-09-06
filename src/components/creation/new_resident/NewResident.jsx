import React, {useCallback, useState} from 'react';
import TabLayout from '../../ui/TabLayout.jsx';
import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";
import DocumentsContent from "../DocumentsContent.jsx";
import GuarantorsForm from "../GuarantorsForm.jsx";
import ContactsForm from "../ContactsForm.jsx";
import {useNavigate} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../firebase.js";

function NewResident() {

    let [state, setState] = useState({
        generalInfo: {},
        additionalInfo: {},
        guarantorsInfo: {},
        contactsInfo: {},
        documentsInfo: {}
    });

    let navigate = useNavigate();

    const handleSubmit  = (section) => (data) => {
        console.log('Form data submitted:', data);
        setState((oldState) => {
            const newState = {...oldState};
            newState[section] = data;
            return newState;
        })
    };

    const saveData = useCallback(() => {
        console.log("State", state)
        const residentsCol = collection(db, 'residents')
        addDoc(residentsCol, state).then(() => {
            navigate("/dashboards/manager");
        })
    }, [state]);


    const sections = [
        { id: 'generalInfo', title: 'Informações Geral', content: <GeneralContent onSubmit={handleSubmit("generalInfo")}/> },
        { id: 'additionalInfo', title: 'Informações Adicionais', content: <AdditionalContent onSubmit={handleSubmit("additionalInfo")}/>},
        { id: 'guarantors', title: 'Fiadores', content: <GuarantorsForm onSubmit={handleSubmit("guarantorsInfo")}/> },
        { id: 'contacts', title: 'Contactos de Emergência', content: <ContactsForm emergency={true} onSubmit={handleSubmit("contactsInfo")}/> },
        { id: 'documents', title: 'Documentos', content: <DocumentsContent onSubmit={handleSubmit("documentsInfo")}/> },
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

export default NewResident;
