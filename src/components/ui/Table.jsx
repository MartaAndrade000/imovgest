import {useState} from "react";
import Icon from "./Icon.jsx";
import Edit from "../../assets/icons/icon_edit.svg";

import "./table.scss"

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
                <td> <img src={Edit} style={{width:20}}/></td>
            </tr>
        );
    }
}

const Actions = ({selected, children}) => {
    return (
        <>
            {/*<div style={{opacity: .3}}>{selected.join(",")}</div>*/}
            {/*TODO debug line*/}
            <div style={{opacity: .3}}>Selected: {selected.length}</div>
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

    let [selected, setSelected] = useState([]);
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

            <div className={"action-wrapper"}>
                {selected.length > 0 && <Actions selected={selected}>
                    <Icon img={"/src/assets/icons/icon_trash.svg"}
                          onClick={() => {
                              console.log("wow")
                          }}
                          style={{padding: 5}}
                    />
                    <Icon img={"/src/assets/icons/icon_archive.svg"}
                          style={{padding: 5}}
                    />
                </Actions>}
            </div>
        </div>
    )
}

export default Table;