
import TabLayout from "../../ui/TabLayout.jsx";
import React from "react";
import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";
import DocumentsContent from "../new_property/DocumentsContent.jsx";
import GuarantorsForm from "../GuarantorsForm.jsx";

function NewContract() {
    const sections = [
        { id: 'generalInfo', title: 'Informações Geral', content: <GeneralContent /> },
        { id: 'additionalInfo', title: 'Informações Adicionais', content: <AdditionalContent/> },
        { id: 'certificates-and-insurance', title: 'Fiadores', content: <GuarantorsForm/>},
        { id: 'photos', title: 'Seguros', content: <DocumentsContent/>},
        { id: 'documents', title: 'Documentos', content: <DocumentsContent/>},
    ];

    return (
        <div className={"main-container"}>
            <TabLayout sections={sections} />
        </div>
    );
}

export default NewContract;