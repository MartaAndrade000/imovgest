import React, { useState } from 'react';

import "./tablayout.scss"

function TabLayout({ sections }) {
    const [activeTab, setActiveTab] = useState(sections[0].id);

    const handleChange = (e, id) => {
        e.preventDefault();
        setActiveTab(id);
    };

    return (
        <div className={"tab-wrapper"}>
            <div className="tab-title">
                <ul className="tab-list">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <div
                                className={`tab-item ${activeTab === section.id ? 'active' : ''}`}
                                onClick={(e) => handleChange(e, section.id)}
                            >
                                <a href={`#${section.id}`}>{section.title}</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="tab-content">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`tab-panel ${activeTab === section.id ? 'active' : ''}`}
                        id={`#${section.id}`}
                    >
                        {section.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TabLayout;
