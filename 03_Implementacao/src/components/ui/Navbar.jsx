import React from 'react';
import "./navebar.scss";

import {Link, useNavigate} from 'react-router-dom';

import HomeIcon from "../../assets/icons/icon_home.svg"
import HouseIcon from "../../assets/icons/icon_property.svg"
import ResidentIcon from "../../assets/icons/icon_resident.svg"
import KeyIcon from "../../assets/icons/icon_key.svg"
import DocIcon from "../../assets/icons/icon_docs.svg"
import PhoneIcon from "../../assets/icons/icon_phone.svg"
import Logo from "../../../public/logo_new.png"
const Navbar = ({ selected }) => {

    const navigate = useNavigate();

    return (
        <nav className={"sidebar"}>
            <div className={"logo"}>
                <a> <img src={Logo}/> </a>
            </div>
            <ul className={"menu"}>
                <li className={selected === "office" ? "selected" : "" }>
                    <div className={"icon"}> <img src={HomeIcon}></img></div>
                    <span><Link className={"link"} to="/dashboards/manager">Escritório </Link></span>
                </li>
                <li className={selected === "properties" ? "selected" : "" }>
                    <div className={"icon"}> <img src={HouseIcon}></img></div>
                    <span><Link className={"link"} to="/dashboards/manager/properties" >Propriedades</Link></span>
                </li>
                <li className={selected === "residents" ? "selected" : "" }>
                    <div className={"icon"}> <img src={ResidentIcon}></img></div>
                    <span><Link className={"link"} to="/dashboards/manager/residents">Inquilinos</Link></span>
                </li>
                <li className={selected === "contracts" ? "selected" : "" }>
                    <div className={"icon"}> <img src={KeyIcon}></img></div>
                    <span><Link className={"link"} to="/dashboards/manager/contracts">Arrendamentos</Link></span>
                </li>
                <li className={selected === "documents" ? "selected" : "" }>
                    <div className={"icon"}> <img src={DocIcon}></img></div>
                    <span>Documentos</span>
                </li>
                <li className={selected === "contacts" ? "selected" : "" }>
                    <div className={"icon"}> <img src={PhoneIcon}></img></div>
                    <span>Contactos</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;