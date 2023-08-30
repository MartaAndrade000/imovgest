import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../../firebase.js";
import Page from "../../../../components/ui/Page.jsx";
import Config from "../../../../assets/icons/icon_config.svg";
import Property from "../../../../assets/icons/icon_property.svg";
import Key from "../../../../assets/icons/icon_key.svg";

import "./temp_table.scss"
import {useState} from "react";
import Icon from "../../../../components/ui/Icon.jsx";

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

const filterToPill = (input) => {
    return (
        <div className={"pill"} key={input}>
            {input}
        </div>
    )
}


const dataToTr = (headers, selected, onClick) => {
    return (data) => {
        let checked = selected.includes(data.id);
        return (
            <tr data-id={data.id} key={data.id}>
                <td><input type={"checkbox"} checked={checked} onChange={() => onClick(data.id)}/></td>
                {headers.map(({key}, idx) => <td key={idx}>{data[key]}</td>)}
                <td>Change me to EDIT icon</td>
                {/*TODO Change me to EDIT icon*/}
            </tr>
        );
    }
}

const Actions = ({selected, children}) => {
    return (
        <>
            <div style={{opacity: .3}}>{selected.join(",")}</div>
            {/*TODO debug line*/}
            <div>Selected: {selected.length}</div>
            <div>Actions</div>
            {children}
        </>
    )
}
const Table = ({
                   filters = [],
                   headers = [],
                   data = []
               }) => {

    let [selected, setSelected] = useState([1, 2, 3]);
    const onClick = (id) => {
        let idx = selected.indexOf(id);
        if (idx > -1) setSelected(selected.filter((_, aidx) => idx !== aidx));
        else setSelected([...selected, id]);
    }
    const mapping = dataToTr(headers, selected, onClick)

    return (
        <div className={"table-comp-wrapper"}>
            <div className={"filter-wrapper"}>
                {filters.map(filterToPill)}
            </div>
            <div className={"action-wrapper"}>
                {selected.length > 0 && <Actions selected={selected}>
                    <Icon img={"/src/assets/icons/icon_property.svg"}
                          onClick={() => {
                              console.log("wow")
                          }}
                          style={{padding: 4}}
                    />
                    <Icon img={"/src/assets/icons/icon_docs.svg"}
                          style={{padding: 5}}
                    />
                </Actions>}
            </div>
            <div className={"table-wrapper"}>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        {headers.map(({label}, idx) => <th key={idx}>{label}</th>)}
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(mapping)}
                    </tbody>
                </table>
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
