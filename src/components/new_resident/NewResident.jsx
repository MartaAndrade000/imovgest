import React from 'react';
import TabLayout from '../ui/TabLayout.jsx';
import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";
import GuarantorsContent from "./GuarantorsContent.jsx";
import ContactsContent from "../new_property/ContactsContent.jsx";
import DocumentsContent from "../new_property/DocumentsContent.jsx";

function NewResident() {
    const sections = [
        { id: 'generalInfo', title: 'Informações Geral', content: <GeneralContent /> },
        { id: 'additionalInfo', title: 'Informações Adicionais', content: <AdditionalContent/>},
        { id: 'certificates-and-insurance', title: 'Fiadores', content: <GuarantorsContent/> },
        { id: 'photos', title: 'Contactos de Emergência', content: <ContactsContent/> },
        { id: 'documents', title: 'Documentos', content: <DocumentsContent/> },
    ];

    return (
        <div className={"main-container"}>
            <TabLayout sections={sections} />
        </div>
    );
}

export default NewResident;
