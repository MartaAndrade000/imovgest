
import TabLayout from "../ui/TabLayout.jsx";
import React from "react";
import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";

function NewContract() {
    const sections = [
        { id: 'generalInfo', title: 'Informações Geral', content: <GeneralContent /> },
        { id: 'additionalInfo', title: 'Informações Adicionais', content: <AdditionalContent/> },
        { id: 'certificates-and-insurance', title: 'Certificados e Seguros', content: /*<InsuranceContent/>*/ "Ahh" },
        { id: 'photos', title: 'Fotografias', content: /*<PhotosContent/>*/ "Ahh" },
        { id: 'contacts', title: 'Contactos', content: /*<ContactsContent/>*/ "Ahh" },
        { id: 'documents', title: 'Documentos', content: /*<DocumentsContent/>*/ "Ahh" },
    ];

    return (
        <div className={"main-container"}>
            <TabLayout sections={sections} />
        </div>
    );
}

export default NewContract;