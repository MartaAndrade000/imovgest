import Card from "../../ui/cards/Card.jsx";
import TabLayout from "../../ui/TabLayout.jsx";

import React from "react";

import ResidentImage from "../../../assets/icons/icon_resident.svg";
import Location from "../../../assets/icons/icon_location.svg";
import Contract from "../../../assets/icons/icon_doc.svg";
import Duration from "../../../assets/icons/icon_clock.svg";
import User from "../../../assets/icons/icon_profile.svg";

import "../detail_property/property.scss"
import Contact from "../../../assets/icons/icon_phone.svg";


const ContractContent = () => {

    return (
        <>
            <div className={"contract-wrapper"} style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                border: '1px solid #e5e5e5',
                borderRadius: 5
            }}>
                <h1 style={{margin: 0, fontSize: 20, fontWeight: 300, paddingBottom: 5}}>Identificador</h1>
                <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  <img src={ResidentImage} style={{width: 20}}/>
                  Nome Apelido
              </span>
                <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  <img src={Location} style={{width: 20}}/>
                  Rua Blah Blah
              </span>
                <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                 <img src={Contract} style={{width: 18}}/>
                  Contrato de arrendamento habitacional
              </span>
                <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  <img src={Duration} style={{width: 17}}/>
                  Duração
              </span>
                <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  Renda: <text style={{color: '#7d938a'}}>Valor</text>
              </span>
                <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  Encargos: <text style={{color: '#7d938a'}}>Valor</text>
              </span>

            </div>
        </>
    );
}

const ContactContent = () => {

    return(
        <>
            <div className={"contact-wrapper"}>
                <div className={"phone"}>
                    <img src={Contact}/>
                </div>
                <div className="contact-item" >
                    <a className={"name"}>Nome Apelido</a>
                    <div style={{fontSize: 12}}>Tipo de Contacto</div>
                    <div>Email</div>
                    <div>Numero</div>
                </div>
            </div>
        </>
    );
}

const GuarantorContent = () => {
    return(
        <>
            <div className={"contact-wrapper"}>
                <div className={"phone"}>
                    <img src={User}/>
                </div>
                <div className="contact-item" >
                    <a className={"name"}>Nome Apelido</a>
                    <div style={{fontSize: 12}}>Tipo de Contacto</div>
                    <div>Email</div>
                    <div>Numero</div>
                </div>
            </div>
        </>
    );
}

const Resident = () => {

    const sections = [
        {id: 'generalInfo', title: 'Arrendamentos', content: ContractContent()},
        {id: 'guarantor', title: 'Fiadores', content: GuarantorContent()},
        {id: 'contacts', title: 'Contactos de Emergência', content: ContactContent()},
    ];

    return (
        <div className={"main"}>
            <div className={"tab-row"}>
                <div className={"card-container"}>
                    <Card title={"Visão Geral"} content={
                        <>
                            <img src={User} style={{padding:20, width:170}}/>

                            <div className={"general-info"}>
                                <h5 className={"title"} style={{fontSize: 20}}>Nome Apelido</h5>
                                <span><b>Data de Nascimento </b> dd/mm/yy <br/></span>
                                <span><b>Nacionalidade </b> ahah <br/></span>
                                <span><b>Telemóvel</b>  925 225 318 <br/></span>
                                <span><b>Email</b>  martolasandrade@gmail.com <br/></span>

                            </div>
                        </>
                    }/>
                </div>
                <TabLayout sections={sections}/>
            </div>
            <div className={"tab-row"}>
                <div className={"card-container"}>
                    <Card title={"Inquilino"} content={
                        <div className={"general-info"}>
                            <div className={"tab-row"}>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Propriedade Alugada</h5>
                                    <span>
                                        <b>ID Propriedade</b> <br/>
                                        Rua <br/>
                                        Código Postal <br/>
                                        País
                                    </span>
                                </div>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Endereço do Inquilino</h5>
                                    <span>
                                        Rua <br/>
                                        Código Postal <br/>
                                        País
                                    </span>
                                </div>
                            </div>

                            <div className={"tab-row"}>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Situação Profissional</h5>
                                    <span>
                                        <b>Ocupação do inquilino</b>  Bailarina <br/>
                                        <b>Receitas</b>  1800
                                    </span>
                                </div>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Banco</h5>
                                    <span>
                                        <b>Banco</b>  Millenium <br/>
                                        <b>IBAN</b>  PT123456789 <br/>
                                        <b>SWIFT/BIC</b>  SWIFTBIC <br/>
                                    </span>
                                </div>
                            </div>

                        </div>
                    }></Card>
                </div>
            </div>
        </div>
    );

}

export default Resident