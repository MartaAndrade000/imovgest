import React from 'react';
import "./navebar.scss";

import HomeIcon from "../../assets/icons/icon_home.svg"
import HouseIcon from "../../assets/icons/icon_property.svg"
import ResidentIcon from "../../assets/icons/icon_resident.svg"
import KeyIcon from "../../assets/icons/icon_key.svg"
import DocIcon from "../../assets/icons/icon_docs.svg"
import PhoneIcon from "../../assets/icons/icon_phone.svg"
import Logo from "../../../public/logo_new.png"
const Navbar = () => {

    return (
        <nav className={"sidebar"}>
            <div className={"logo"}>
                <a> <img src={Logo}/> </a>
            </div>
            <ul className={"menu"}>
                <li>
                    <div className={"icon"}> <img src={HomeIcon}></img></div>
                    <span>Escritório</span>
                </li>
                <li>
                    <div className={"icon"}> <img src={HouseIcon}></img></div>
                    <span>Propriedades</span>
                </li>
                <li>
                    <div className={"icon"}> <img src={ResidentIcon}></img></div>
                    <span>Inquilinos</span>
                </li>
                <li>
                    <div className={"icon"}> <img src={KeyIcon}></img></div>
                    <span>Arrendamentos</span>
                </li>
                <li>
                    <div className={"icon"}> <img src={DocIcon}></img></div>
                    <span>Documentos</span>
                </li>
                <li>
                    <div className={"icon"}> <img src={PhoneIcon}></img></div>
                    <span>Contactos</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;