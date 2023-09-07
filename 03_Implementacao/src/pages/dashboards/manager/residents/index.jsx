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
        {label: "Inquilino", key: "name"},
        {label: "Tipo", key: "type"},
        {label: "Imóvel", key: "property"},
        {label: "Telemóvel", key: "phone"},
        {label: "Email", key: "email"},
    ]

    const data = [
        {id: 1, name: "Manuel Moitas", type: "Particular", property: "ODV_1", phone: 912345678, email: "MM@gmail.com"},
        {id: 2, name: "Guilherme Almeida", type: "Particular", property: "ODV_2", phone: 918765432, email:"GA123@gmail.com"},
        {id: 3, name: "Quim Barreiros", type: "Empresa", property: "ODV_3", phone: 923456789, email: "QuimzinhoBarro@gmail.com"}
    ]

    const [values, loading, error] = useCollectionData(collection(db, "residents"));
    const [parsedValues, setParsedValues] = useState(null)
    useEffect(() => {
        if (!parsedValues && values) {
            setParsedValues(values.map((res) => {
                return {
                    name: res.generalInfo.name,
                    type: res.generalInfo.type,
                    property: "",
                    phone: res.generalInfo.mobileNumber,
                    email: res.generalInfo.email
                }
            }));
        }
    }, [values])

    for (let i = 4; i < 10; i++) {
        data.push({id: i, name: "Esteves da Costa", type: "Particular", property: "ST_1", phone: 934537865, email: "AiJesus@gmail.com"})
    }

    return (
        <Page selected={"residents"}>
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
