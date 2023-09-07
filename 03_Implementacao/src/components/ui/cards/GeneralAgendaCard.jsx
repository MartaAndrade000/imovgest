import Card from "./Card.jsx";
import React from "react";
import "./generalAgendaCard.scss";

const AgendaContent = ({images, onClick}) => {
    return (
        <>
            <div className={"heading"}>
                <div className={"icon"} onClick={onClick}><img src={images['calendar']}/></div>
                <div className={"title middle"}>
                    Today
                    <span>1</span>
                </div>
                <div className={"title"}>
                    Tomorrow
                    <span>0</span>
                </div>
            </div>
            <div className={"items"}>
                <div className={"item-left"}>
                    <div className={"item-left-info"}>
                        <img src={images['!']}/>
                        Reunião Renda
                    </div>
                    <div className={"item-left-info"}>
                        <img src={images['calendar']}/>
                        10/05/2023
                    </div>
                    <div className={"item-left-info"}>
                        <img src={images['props']}/>
                        Linda-A-Velha
                    </div>
                    <div className={"item-left-info"}>
                        <img src={images['location']}/>
                        Café Chico da Tina
                    </div>
                </div>
                <div className={"item-right"}>
                    <img src={images['clock']}/>
                    11:00-11:30
                </div>
            </div>
        </>
    )
}
const GeneralAgendaCard = ({title, images, onClick}) => {
    return (<Card
        className={"agenda"}
        title={title}
        content={
            <AgendaContent images={images} onClick={onClick}/>
        }
    />)
}

export default GeneralAgendaCard;