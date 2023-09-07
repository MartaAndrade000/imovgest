import React from 'react';
import "./card.scss";

const Card = ({ title, content, className = ""}) => {
    return (
        <div className={`card ${className}`}>
            <div className="header">
                <a href="src/components/ui#"> {title}</a>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    );
};

export default Card;