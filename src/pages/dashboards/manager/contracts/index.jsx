import {auth, db} from "../../../../firebase.js";
import Page from "../../../../components/ui/Page.jsx";


import Config from "../../../../assets/icons/icon_config.svg";
import Property from "../../../../assets/icons/icon_property.svg";
import Key from "../../../../assets/icons/icon_key.svg";

import "../../../../components/ui/table.scss"
import Table from "../../../../components/ui/Table.jsx";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from "firebase/firestore";
import {useEffect, useState} from "react";

const Layout = ({stats: Stats, children, ...rest}) => {

    return (
        <>
            <div className={"main-container"}>
                <div className={"main-content"} style={{flexGrow: 1}}>
                    {Stats}
                    {children}
                </div>
            </div>
        </>
    )
}


const PropertyStats = () => {
    return (
        <div className={"stats"}>
            <div className={"card"}>
                <div className={"header"}>
                    Properties
                    <a href="#" className={"config"}><img src={Config} className={"icon-config"}></img></a>
                </div>
                <div className={"content"}>
                    <div className={"content-icon"}><img src={Property}/></div>
                    <div className={"info"}>
                        1
                        <span> <b>DE 1</b></span>
                    </div>
                </div>
            </div>
            <div className={"card"}>
                <div className={"header"}>
                    Contracts
                    <a href="#" className={"config"}><img src={Config} className={"icon-config"}></img></a>
                </div>
                <div className={"content"}>
                    <div className={"content-icon"}><img src={Key}/></div>
                    <div className={"info"}>
                        1
                        <span> <b>DE 1</b></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const index = () => {
    // const [user, loading, error] = useAuthState(auth);
    const headers = [
        {label: "Contrato", key: "name"},
        {label: "Tipo", key: "type"},
        {label: "Inquilino", key: "resident"},
        {label: "Renda", key: "rent"},
        {label: "Depósito", key: "deposit"},
        {label: "Duração", key: "duration"},
    ]

    const data = [
        {id: 1, name: "ContratoODV_1", type: "Arrendamento habitacional", resident: "Manuel Mitas", rent: 1_000, deposit: 200, duration: "15/01/2000-15/01/2003"},
        {id: 2, name: "ContratoODV_1", type: "Arrendamento habitacional", resident: "Manuel Mitas", rent: 1_000, deposit: 200, duration: "15/01/2000-15/01/2003"},
        {id: 3, name: "ContratoODV_1", type: "Arrendamento habitacional", resident: "Manuel Mitas", rent: 1_000, deposit: 200, duration: "15/01/2000-15/01/2003"},
    ]

    const [values, loading, error] = useCollectionData(collection(db, "contracts"));
    const [parsedValues, setParsedValues] = useState(null)
    useEffect(() => {
        if (!parsedValues && values) {
            setParsedValues(values.map((contract) => {
                return {
                    name: contract.generalInfo.id,
                    type: contract.generalInfo.type,
                    resident: contract.generalInfo.name + " " + contract.generalInfo.surname + " " + "(" + contract.generalInfo.residentID + ")",
                    rent: contract.generalInfo.fullRent,
                    deposit: contract.generalInfo.deposit,
                    duration: contract.generalInfo.startIncome + " - " + contract.generalInfo.endIncome
                }
            }));
        }
    }, [values])

    for (let i = 4; i < 10; i++) {
        data.push({id: i, name: "ContratoODV_1", type: "Arrendamento habitacional", resident: "Manuel Mitas", rent: 1_000, deposit: 200, duration: "15/01/2000-15/01/2003"},)
    }

    return (
        <Page selected={"contracts"}>
            <Layout stats={<PropertyStats/>}>
                {error && <div>Error...</div>}
                {loading && <div>Loading...</div>}
                {!loading && parsedValues && <Table filters={["test", "wow"]}
                                                    headers={headers}
                                                    data={parsedValues}/>}

            </Layout>
        </Page>

    )
}

export default index;
