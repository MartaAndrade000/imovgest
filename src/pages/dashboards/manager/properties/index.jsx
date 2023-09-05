import {auth} from "../../../../firebase.js";
import Page from "../../../../components/ui/Page.jsx";


import Config from "../../../../assets/icons/icon_config.svg";
import Property from "../../../../assets/icons/icon_property.svg";
import Key from "../../../../assets/icons/icon_key.svg";

import "../../../../components/ui/table.scss"
import Table from "../../../../components/ui/Table.jsx";

const Layout = ({stats: Stats, content: Content, ...rest}) => {

    return (
        <>
            <div className={"main-container"}>
                <div className={"main-content"} style={{flexGrow: 1}}>
                    {Stats}
                    {Content}
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
        {label: "Imovel", key: "name"},
        {label: "Tipo", key: "type"},
        {label: "Inquilino", key: "steve"},
        {label: "Renda", key: "rent"},
    ]

    const data = [
        {id: 1, name: "Casa das Laranjeiras", type: "Arrendamento", steve: "Ze das Couves", rent: 2_000},
        {id: 2, name: "Garagem do vizinho", type: "Compra", steve: "Maria Conceição", rent: 3_000_000},
        {id: 3, name: "Quinta das Couves", type: "Arrendamento", steve: "Manuel", rent: 250}
    ]

    for (let i = 4; i < 10; i++) {
        data.push({id: i, name: "Quinta das Couves", type: "Arrendamento", steve: "Manuel", rent: 250})
    }

    return (
        <Page selected={"properties"}>
            <Layout stats={<PropertyStats/>} content={
                <Table filters={["test", "wow"]}
                       headers={headers}
                       data={data}
                />
            }/>
        </Page>

    )
}

export default index;
