import Card from "../../ui/cards/Card.jsx";
import TabLayout from "../../ui/TabLayout.jsx";

import React, {useState} from "react";

import "./property.scss"


import Location from "../../../assets/icons/icon_location.svg"
import Camera from "../../../assets/icons/icon_camera.svg"
import Map from "../../../assets/icons/icon_map.svg"
import House from "../../../assets/icons/icon_property.svg"
import Division from "../../../assets/icons/icon_divisions.svg"
import Room from "../../../assets/icons/icon_room.svg"
import Bath from "../../../assets/icons/icon_bath.svg"
import Coins from "../../../assets/icons/icon_coins.svg";
import Contact from "../../../assets/icons/icon_phone.svg";


import Resident from "../../../assets/icons/icon_resident.svg"
import Contract from "../../../assets/icons/icon_doc.svg"
import Duration from "../../../assets/icons/icon_clock.svg"

const ContractContent = () => {

    return (
      <>
          <div className={"contract-wrapper"} style={{display: "flex", flexDirection:"column", padding:10, border:'1px solid #e5e5e5', borderRadius:5}}>
              <h1 style={{margin:0, fontSize:20, fontWeight:300, paddingBottom: 5}}>Identificador</h1>
              <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  <img src={Resident} style={{width:20}}/>
                  Nome Apelido
              </span>
              <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  <img src={Location} style={{width:20}}/>
                  Rua Blah Blah
              </span>
              <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                 <img src={Contract} style={{width:18}}/>
                  Contrato de arrendamento habitacional
              </span>
              <span style={{display: "flex", flexDirection: "row", padding: '3px 0', gap: 3}}>
                  <img src={Duration} style={{width:17}}/>
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

const Property = () => {

    const [activeTab, setActiveTab] = useState('photos');
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Camera, Map];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const sections = [
        {id: 'owner', title: 'Proprietário', content: "Hi"},
        {id: 'contracts', title: 'Arrendamentos', content: ContractContent()},
        {id: 'certificates-and-insurance', title: 'Certificados e Seguros', content: "Hi"},
        {id: 'documents', title: 'Documentos', content: "Hi"},
    ];


    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={"main"}>
            <div className={"tab-row"}>
                <div className={"card-container"}>
                    <Card title={"Informação"} content={

                        <div className={"display"}>
                            <div className={"display-body"}>
                                <div className={`picture-container ${activeTab === 'photos' ? 'active' : ''}`}>

                                    <div className="picture-wrapper">
                                        <img
                                            src={images[currentIndex]}
                                            alt={`Image ${currentIndex + 1}`}
                                            className="picture"
                                        />
                                    </div>
                                    <div className="carousel-navigation">
                                        <button className="prev-button" onClick={goToPrevImage}>
                                            &#9664;
                                        </button>
                                        <button className="next-button" onClick={goToNextImage}>
                                            &#9654;
                                        </button>
                                    </div>
                                </div>
                                <div className={`street-container ${activeTab === 'street' ? 'active' : ''}`}>Street
                                </div>
                                <div className={`map-container ${activeTab === 'map' ? 'active' : ''}`}>Map</div>
                            </div>

                            <ul className={"display-header"}>
                                <li className={`cell ${activeTab === 'photos' ? 'active' : ''}`}>
                                    <a onClick={() => handleTabClick('photos')}>
                                        <img src={Camera}/>
                                        Fotos
                                    </a>
                                </li>
                                <li className={`cell ${activeTab === 'street' ? 'active' : ''}`}>
                                    <a onClick={() => handleTabClick('street')}>
                                        <img src={Location}/>
                                        Rua
                                    </a>
                                </li>
                                <li className={`cell ${activeTab === 'map' ? 'active' : ''}`}>
                                    <a onClick={() => handleTabClick('map')}>
                                        <img src={Map}/>
                                        Mapa
                                    </a>
                                </li>
                            </ul>

                        </div>
                    }/>
                </div>
                <TabLayout sections={sections}/>
            </div>
            <div className={"tab-row"}>
                <div className={"card-container"}>
                    <Card title={"Visão Geral"} content={
                        <div className={"general-info"}>
                            <h1 className={"title"}>
                                Indetificador
                                <br/>
                                <span style={{fontWeight:300}}>Tipo</span>
                            </h1>

                            <ul className={"display-header char"}>
                                <li className={"cell char"}>
                                    <a onClick={() => handleTabClick('photos')}>
                                        <img src={House}/>
                                        var m²
                                    </a>
                                </li>
                                <li className={"cell char"}>
                                    <a onClick={() => handleTabClick('street')}>
                                        <img src={Division}/>
                                        var
                                    </a>
                                </li>
                                <li className={"cell char"}>
                                    <a onClick={() => handleTabClick('map')}>
                                        <img src={Room}/>
                                        var
                                    </a>
                                </li>
                                <li className={"cell char"}>
                                    <a onClick={() => handleTabClick('map')}>
                                        <img src={Bath}/>
                                        var
                                    </a>
                                </li>
                            </ul>
                            <div className={"revenue-total"} style={{backgroundColor: '#fcfcfc'}}>
                                <div className={"tab-revenue"}>
                                    <div className={"tab-revenue-icon"}>
                                        <img src={Coins}/>
                                    </div>
                                    <div className={"tab-revenue-stats"}>
                                        <span className={"tab-revenue-title"}>Renda</span>
                                        <span className={"tab-revenue-value"}>500</span>
                                    </div>
                                </div>
                            </div>

                            <div className={"tab-row"}>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Morada</h5>
                                    <span>
                                        Rua Moitas e Morangos <br/>
                                        Código Postal <br/>
                                        País
                                    </span>
                                </div>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Renda</h5>
                                    <span>
                                    <b>Renda</b> 400 <br/>
                                    <b>Encargos</b> 100
                                    </span>
                                </div>
                            </div>
                            <h5 className={"title"}>Chaves de Acesso</h5>
                            <span>
                            Descrição <b>Código</b><br/>
                            Descrição <b>Código</b><br/>
                            </span>
                        </div>
                    }></Card>
                </div>
                <div className={"card-container"}>
                    <Card title={"Informação Adicional"} content={
                        <div className={"general-info"}>
                            <div className={"tab-row"}>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Equipamentos</h5>
                                    <span>
                                        Varanda <br/>
                                        Garagem <br/>
                                        Acesso ao WiFi
                                    </span>
                                </div>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Caracteristicas</h5>
                                    <span>
                                        Mobilado <br/>
                                        Permitido Animais <br/>
                                    </span>
                                </div>
                            </div>
                            <div className={"tab-row"}>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Informações Financeiras</h5>
                                    <span>
                                        Varanda <br/>
                                        Garagem <br/>
                                        Acesso ao WiFi
                                    </span>
                                </div>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Notas</h5>
                                    <span>
                                        Blah blah blah
                                    </span>
                                </div>
                            </div>
                            <div className={"tab-row"}>
                                <div className={"tab-column"}>
                                    <h5 className={"title"}>Contactos</h5>
                                    <div className={"contact-wrapper"}>
                                        <div className={"phone"}>
                                            <img src={Contact}/>
                                        </div>
                                        <div className="contact-item" >
                                            <a className={"name"}>
                                                Nome Apelido
                                            </a>
                                            <div style={{fontSize: 12}}>Tipo</div>
                                            <div>Email</div>
                                            <div>Numero</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }></Card>
                </div>
            </div>
        </div>
    );

}

export default Property