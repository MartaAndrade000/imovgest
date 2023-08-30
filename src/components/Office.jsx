import Property from "../assets/icons/icon_property.svg"
import Resident from "../assets/icons/icon_resident.svg"
import Key from "../assets/icons/icon_key.svg"
import Receipt from "../assets/icons/icon_doc.svg"
import Config from "../assets/icons/icon_config.svg"
import Coins from "../assets/icons/icon_coins.svg"
import Calendar from "../assets/icons/icon_calendar.svg"
import Location from "../assets/icons/icon_location.svg"
import Exclamation from "../assets/icons/icon_exclamation.svg"
import Danger from "../assets/icons/icon_danger.svg"
import Clock from "../assets/icons/icon_clock.svg"
import Task from "../assets/icons/icon_task.svg"
import Tools from "../assets/icons/icon_tools.svg"
import Check from "../assets/icons/icon_check.svg"
import AirCon from "../assets/icons/type_repair/icon_air_conditioner.svg"

import "../../scss/office.scss"


const Office = () => {

    const handleClick = (e) => {

        const headers = document.querySelectorAll(".tab-item");
        headers.forEach((header) => {
            header.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        const href = e.currentTarget.children[0].getAttribute("href");

        const panel = document.getElementById(href);

        const contents = document.querySelectorAll(".tab-panel");
        contents.forEach((content) => {
            content.classList.remove("active");
        });
        panel.classList.add("active");
    };

    return (
        <div className={"main-container"}>
            <div className={"create"}>
                <div className={"group"}>
                    <button> <img src={Property}></img> </button>
                    <div>New Property</div>
                </div>
                <div className={"group"}>
                    <button> <img src={Resident} style={{paddingTop: '10px'}}></img> </button>
                    <div>New Resident</div>
                </div>
                <div className={"group"}>
                    <button> <img src={Key}></img> </button>
                    <div>New Contract</div>
                </div>
                <div className={"group"}>
                    <button> <img src={Receipt}></img> </button>
                    <div>New Receipt</div>
                </div>
            </div>
            <div className={"main-content"}>
                <div className={"stats office"}>
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
                            Residents
                            <a href="#" className={"config"}><img src={Config} className={"icon-config"}></img></a>
                        </div>
                        <div className={"content"}>
                            <div className={"content-icon"}><img src={Resident} style={{paddingTop: '5px'}}/></div>
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
                <div className={"management-agenda"}>
                    <div className={"card"}>
                        <div className={"header"}>
                            Income and Expenses
                            <a href="#" className={"config"}><img src={Config} className={"icon-config"}></img></a>
                        </div>
                        <div className={"content"}>
                            <div className={"tab-title"}>
                                <ul className={"tab-list"}>
                                    <li>
                                        <div className={"tab-item active"} onClick={handleClick}>
                                            <a href="#finance-present-month">MÊS ATUAL</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={"tab-item"} onClick={handleClick}>
                                            <a href="#finance-past-month">MÊS PASSADO</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={"tab-item"} onClick={handleClick}>
                                            <a href="#finance-present-year">ANO ATUAL</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-panel active" id="#finance-present-month">
                                    <div className={"income-expenses"}>
                                        <div className={"tab-revenue"}>
                                            <span className={"tab-revenue-title"}>Rendimento Bruto Mensal</span>
                                            <span className={"tab-revenue-value"}>500</span>
                                        </div>
                                        <div className={"tab-revenue"}>
                                            <span className={"tab-revenue-title"}>Despesas do Mês</span>
                                            <span className={"tab-revenue-value"}>500</span>
                                        </div>
                                    </div>
                                    <div className={"revenue-total"}>
                                        <div className={"tab-revenue"}>
                                            <div className={"tab-revenue-icon"}>
                                                <img src={Coins}/>
                                            </div>
                                            <div className={"tab-revenue-stats"}>
                                                <span className={"tab-revenue-title"}>Rendimento Bruto Mensal</span>
                                                <span className={"tab-revenue-value"}>500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-panel" id="#finance-past-month">
                                    <div className={"income-expenses"}>
                                        <div className={"tab-revenue"}>
                                            <span className={"tab-revenue-title"}>Rendimento Bruto Mensal</span>
                                            <span className={"tab-revenue-value"}>600</span>
                                        </div>
                                        <div className={"tab-revenue"}>
                                            <span className={"tab-revenue-title"}>Despesas do Mês</span>
                                            <span className={"tab-revenue-value"}>0</span>
                                        </div>
                                    </div>
                                    <div className={"revenue-total"}>
                                        <div className={"tab-revenue"}>
                                            <div className={"tab-revenue-icon"}>
                                                <img src={Coins}/>
                                            </div>
                                            <div className={"tab-revenue-stats"}>
                                                <span className={"tab-revenue-title"}>Rendimento Bruto Mensal</span>
                                                <span className={"tab-revenue-value"}>600</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-panel" id="#finance-present-year">
                                    <div className={"income-expenses"}>
                                        <div className={"tab-revenue"}>
                                            <span className={"tab-revenue-title"}>Rendimento Bruto Anual</span>
                                            <span className={"tab-revenue-value"}>700</span>
                                        </div>
                                        <div className={"tab-revenue"}>
                                            <span className={"tab-revenue-title"}>Despesas do Ano</span>
                                            <span className={"tab-revenue-value"}>100</span>
                                        </div>
                                    </div>
                                    <div className={"revenue-total"}>
                                        <div className={"tab-revenue"}>
                                            <div className={"tab-revenue-icon"}>
                                                <img src={Coins}/>
                                            </div>
                                            <div className={"tab-revenue-stats"}>
                                                <span className={"tab-revenue-title"}>Rendimento Bruto Anual</span>
                                                <span className={"tab-revenue-value"}>600</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card"}>
                        <div className={"header"}>
                            Agenda
                            <a href="#" className={"config"}><img src={Config} className={"icon-config"}></img></a>
                        </div>
                        <div className={"content"}>
                            <div className={"content-header"}>
                                <div className={"content-icon"}><a href="#"><img src={Calendar}/></a></div>
                                <div className={"content-title middle"}>
                                    Today
                                    <span>1</span>
                                </div>
                                <div className={"content-title"}>
                                    Tomorrow
                                    <span>0</span>
                                </div>
                            </div>
                            <div className={"content-item"}>
                                <div className={"content-item-left"}>
                                    <div className={"content-item-left-info"}>
                                        <img src={Exclamation}/>
                                        Reunião Renda
                                    </div>
                                    <div className={"content-item-left-info"}>
                                        <img src={Calendar}/>
                                        10/05/2023
                                    </div>
                                    <div className={"content-item-left-info"}>
                                        <img src={Property}/>
                                        Linda-A-Velha
                                    </div>
                                    <div className={"content-item-left-info"}>
                                        <img src={Location}/>
                                        Café Chico da Tina
                                    </div>
                                </div>
                                <div className={"content-item-right"}>
                                    <img src={Clock}/>
                                    11:00-11:30
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"repairs-tasks"}>
                    <div className={"card"}>
                        <div className={"header"}>
                            Interventions
                            <a href="#" className={"config"}><img src={Config} className={"icon-config"}></img></a>
                        </div>
                        <div className={"content"}>
                            <div className={"content-header"}>
                                <div className={"content-icon"}>
                                    <a href="#"><img src={Tools}/></a>
                                </div>
                                <div className={"content-title middle"}>
                                    Aberto
                                    <span>1</span>
                                </div>
                                <div className={"content-title middle"}>
                                    Em Atraso
                                    <span>0</span>
                                </div>
                                <div className={"content-title"}>
                                    A Decorrer
                                    <span>0</span>
                                </div>
                            </div>
                            <div className={"content-item"}>
                                <div className={"content-item-left"}>
                                    <div className={"content-item-left-icon"}>
                                        <img src={AirCon}/>
                                    </div>
                                    <div className={"content-left-info"}>
                                        <div className={"content-item-left-info"}>
                                            <img src={Exclamation}/>
                                            Substituição
                                        </div>
                                        <div className={"content-item-left-info"}>
                                            <img src={Calendar}/>
                                            10/05/2023 - 15/05/2023
                                        </div>
                                        <div className={"content-item-left-info"}>
                                            <img src={Property}/>
                                            Linda-A-Velha
                                        </div>
                                        <div className={"content-item-left-info"}>
                                            <img src={Danger}/>
                                            Baixa
                                        </div>
                                    </div>
                                </div>
                                <div className={"content-item-right open"}>
                                    Aberto
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card"}>
                        <div className={"header"}>
                            Tasks
                            <a href="#" className={"config"}><img src={Config} className={"icon-config"}></img></a>
                        </div>
                        <div className={"content"}>
                            <div className={"content-header"}>
                                <div className={"content-icon"}><a href="#"><img src={Task}/></a></div>
                                <div className={"content-title middle"}>
                                    Aberto
                                    <span>1</span>
                                </div>
                                <div className={"content-title"}>
                                    Em Atraso
                                    <span>0</span>
                                </div>
                            </div>
                            <div className={"content-item"}>
                                <div className={"content-item-left"}>
                                    <div className={"content-item-left-icon task"}>
                                        <img src={Check}/>
                                    </div>

                                    <div className={"content-left-info"}>
                                        <div className={"content-item-left-info"}>
                                            <img src={Exclamation}/>
                                            Reunião Renda
                                        </div>
                                        <div className={"content-item-left-info"}>
                                            <img src={Calendar}/>
                                            10/05/2023
                                        </div>
                                        <div className={"content-item-left-info"}>
                                            <img src={Property}/>
                                            Linda-A-Velha
                                        </div>
                                        <div className={"content-item-left-info"}>
                                            <img src={Location}/>
                                            Café Chico da Tina
                                        </div>
                                    </div>
                                </div>
                                <div className={"content-item-right open"}>
                                    Aberto
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Office;