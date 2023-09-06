import TabLayout from "../../ui/TabLayout.jsx";
import React, {useCallback, useEffect, useState} from "react";
import GeneralContent from "./GeneralContent.jsx";
import AdditionalContent from "./AdditionalContent.jsx";
import DocumentsContent from "../DocumentsContent.jsx";
import GuarantorsForm from "../GuarantorsForm.jsx";
import InsuranceContent from "../new_property/InsuranceContent.jsx";
import {useNavigate} from "react-router-dom";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase.js";

function NewContract() {

    const [residentID, setResidentID] = useState([]);

    let [state, setState] = useState({
        generalInfo: {},
        additionalInfo: {},
        guarantorsInfo: {},
        documentsInfo: {},
        insurance: {}
    });

    let navigate = useNavigate();

    const handleGeneralInfoSubmit = (section) => (data) => {
        console.log('Form data submitted:', data);
        setResidentID(data.residentID);

        setState((oldState) => {
            const newState = {...oldState};
            newState[section] = data;
            return newState;
        })
    };

    const handleSubmit = (section) => (data) => {
        console.log('Form data submitted:', data);
        setState((oldState) => {
            const newState = {...oldState};
            newState[section] = data;
            return newState;
        })
    };

    const saveData = useCallback(() => {
        console.log("State", state)

        const contractsCol = collection(db, 'contracts')
        addDoc(contractsCol, state).then(() => {
            navigate("/dashboards/manager");
        })
    }, [state]);

    const [propertyValues, setPropertyValues] = useState([]);
    const [residentValues, setResidentValues] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the 'properties' collection
                const propertyQuerySnapshot = await getDocs(collection(db, 'properties'));
                const propertyData = propertyQuerySnapshot.docs.map((doc) => ({
                    identifier: doc.data().generalInfo.identifier,
                }));
                setPropertyValues(propertyData);

                // Fetch data from the 'residents' collection
                const residentQuerySnapshot = await getDocs(collection(db, 'residents'));
                const residentData = residentQuerySnapshot.docs.map((doc) => doc.data());

                // Set residentData to hold all fields
                setResidentValues(residentData);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle errors here
            }
        };
        fetchData();
    }, []);







    const sections = [
        {
            id: 'generalInfo',
            title: 'Informações Geral',
            content: <GeneralContent onSubmit={handleGeneralInfoSubmit("generalInfo")} propertyValues={propertyValues}
                                     residentValues={residentValues}/>
        },
        {
            id: 'additionalInfo',
            title: 'Informações Adicionais',
            content: <AdditionalContent onSubmit={handleSubmit("additionalInfo")}/>
        },
        {
            id: 'guarantors',
            title: 'Fiadores',
            content: <GuarantorsForm onSubmit={handleSubmit("guarantorsInfo")} residentID={residentID} residentValues={residentValues}/>
        },
        {id: 'insurance', title: 'Seguros', content: <InsuranceContent onSubmit={handleSubmit("insurance")}/>},
        {id: 'documents', title: 'Documentos', content: <DocumentsContent onSubmit={handleSubmit("documentsInfo")}/>},
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

export default NewContract;