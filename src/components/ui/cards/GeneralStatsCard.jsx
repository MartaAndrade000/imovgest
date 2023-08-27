import Card from "./Card.jsx";
import React from "react";
import "./generalStatsCard.scss";

const GeneralStatsContent = ({image, active, text, total, onClick}) => {
    return (
        <>
            <div className="icon"  onClick={onClick}>
                <img src={image}/>
            </div>
            <div className="info">
                {active}
                <span>
                    <b>{text} {total}</b>
                </span>
            </div>
        </>
    )
}
const GeneralStatsCard = ({title, active, text, total, image, onClick}) => {
    return (<Card
        className={"general-stats"}
        title={title}
        content={
            <GeneralStatsContent image={image} active={active} text={text} total={total} onClick={onClick}/>
        }
    />)
}

export default GeneralStatsCard;