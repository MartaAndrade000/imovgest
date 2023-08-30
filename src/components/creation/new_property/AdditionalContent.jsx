import Card from "../../ui/cards/Card.jsx";
import Remove from "../../../assets/icons/icon_remove.svg";
import Add from "../../../assets/icons/icon_plus.svg";

import "../creation.scss"
import {useState} from "react";

const AdditionalContent = () => {
    const [fields, setFields] = useState([]);

    const addFields = () => {
        setFields([...fields, {description: '', code: ''}]);
    };

    const removeFields = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    return(
        <>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Códigos de Acesso"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className="keys-container">
                                {fields.map((field, index) => (
                                    <div className="form-group" key={index}>
                                        <div className={"form-label"}> Chave ou código</div>
                                        <div className={"form-input"}>
                                            <div className={"pair"}>
                                                <input className={"code-input"}
                                                       type="text"
                                                       placeholder="Description"
                                                       value={field.description}
                                                       onChange={(e) => {
                                                           const updatedFields = [...fields];
                                                           updatedFields[index].description = e.target.value;
                                                           setFields(updatedFields);
                                                       }}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Code"
                                                    value={field.code}
                                                    onChange={(e) => {
                                                        const updatedFields = [...fields];
                                                        updatedFields[index].code = e.target.value;
                                                        setFields(updatedFields);
                                                    }}
                                                />

                                                <button className="remove-button"
                                                        onClick={() => removeFields(index)}>
                                                    <img src={Remove}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}></div>
                                <div className={"form-input"} onClick={addFields}>
                                    <a className={"btn"}>
                                        <img src={Add}/>
                                        <span> Adicionar Código</span>
                                    </a>
                                    Pode adicionar multiplas chave e códigos.
                                </div>
                            </div>
                        </div>
                    }></Card>

                    <Card title={"Registo Predial"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Número de registo
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Número de licença
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Artigo
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                        </div>
                    }></Card>
                </div>

                <div className={"tab-column"}>
                    <Card title={"Informações Financeiras"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Imposto residencial
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Imposto sobre a propriedade
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Data de aquisição
                                </div>
                                <div className={"form-input"}>
                                    <input type={"date"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Preço de compra
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Custo de aquisição
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Valor presente
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                        </div>
                    }></Card>
                </div>
            </div>

            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Informações Adicionais"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Mobilado
                                </div>
                                <div className={"form-input"}>
                                    <div className="custom-switch">
                                        <input type="checkbox" id="switch1" className="switch-input"/>
                                        <label htmlFor="switch1" className="switch-label">
                                            <div className="switch-background">
                                                <div className="switch-left"></div>
                                                <div className="switch-middle"></div>
                                                <div className="switch-right"></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Permitido Animais
                                </div>
                                <div className={"form-input"}>
                                    <div className="custom-switch">
                                        <input type="checkbox" id="switch2" className="switch-input"/>
                                        <label htmlFor="switch2" className="switch-label">
                                            <div className="switch-background">
                                                <div className="switch-left"></div>
                                                <div className="switch-middle"></div>
                                                <div className="switch-right"></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Permitido fumar
                                </div>
                                <div className={"form-input"}>
                                    <div className="custom-switch">
                                        <input type="checkbox" id="switch3" className="switch-input"/>
                                        <label htmlFor="switch3" className="switch-label">
                                            <div className="switch-background">
                                                <div className="switch-left"></div>
                                                <div className="switch-middle"></div>
                                                <div className="switch-right"></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Móveis e equipamentos
                                </div>
                                <div className={"form-input"}>
                                    <div className={"check-box-container"}>
                                        <div className={"column"}>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Acesso WiFi</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Varanda</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Ginásio</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Lavandaria</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Piscina</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label>Estores Automáticos</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label>Elevador</label>
                                        </div>
                                        </div>
                                        <div className={"column"}>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Arrecadação</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Estacionamento</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label>Terraço</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label> Garagem</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label>Ar Condicionado</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label>Intercomunicador</label>
                                        </div>
                                        <div className={"check-box"}>
                                            <input type={"checkbox"}/>
                                            <label>Churrasqueira</label>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Lugares de Estacionamento
                                </div>
                                <div className={"form-input"}>
                                    <input type="number"/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Arrecadação m²
                                </div>
                                <div className={"form-input"}>
                                    <input type="number"/>
                                </div>
                            </div>
                        </div>

                    }></Card>
                </div>
            </div>
        </>
    );

}

export default AdditionalContent