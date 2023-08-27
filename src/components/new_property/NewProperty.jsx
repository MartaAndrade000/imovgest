import React from 'react';
import TabLayout from '../ui/TabLayout.jsx';

import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";
import InsuranceContent from "./InsuranceContent.jsx";
import PhotosContent from "./PhotosContent.jsx";
import ContactsContent from "./ContactsContent.jsx";
import DocumentsContent from "./DocumentsContent.jsx";

function NewProperty() {
    const sections = [
        { id: 'generalInfo', title: 'Informações Geral', content: <GeneralContent /> },
        { id: 'additionalInfo', title: 'Informações Adicionais', content:<AdditionalContent/> },
        { id: 'certificates-and-insurance', title: 'Certificados e Seguros', content: <InsuranceContent/> },
        { id: 'photos', title: 'Fotografias', content: <PhotosContent/> },
        { id: 'contacts', title: 'Contactos', content: <ContactsContent/> },
        { id: 'documents', title: 'Documentos', content: <DocumentsContent/> },
    ];

    return (
        <div className={"main-container"}>
            <TabLayout sections={sections} />
        </div>
    );
}

export default NewProperty;
