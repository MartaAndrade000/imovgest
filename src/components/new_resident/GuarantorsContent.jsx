import Card from "../ui/cards/Card.jsx";
import Remove from "../../assets/icons/icon_remove.svg";
import Add from "../../assets/icons/icon_plus.svg";
import New from "../../assets/icons/icon_new.svg";
import Doc from "../../assets/icons/icon_docs.svg";

import "../../scss/new_property_content.scss"
import {useState} from "react";

const GuarantorsContent = () => {

    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const [fields, setFields] = useState([]);
    const [selectedOption, setSelectedOption] = useState('Particular');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const openWindow = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    const removeFields = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    return (
        <>
            <div className={"tab-column"}>
                <Card title={"Fiadores"} className={"form-container"} content={
                    <div className={"form-wrapper1"}>
                        <div className="keys-container">


                            {// TODO: Change this to contain general info about insurance created
                                fields.map((field, index) => (
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
                            <div className={"form-input"} onClick={openWindow}>
                                <a className={"btn"}>
                                    <img src={Add}/>
                                    <span> Adicionar Fiador</span>
                                </a>
                                Pode adicionar multiplos fiadores.
                            </div>
                        </div>
                    </div>
                }></Card>
            </div>
            {isWindowOpen && (
                <div className="modal guarantor">
                    <Card title={"Novo Fiador"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Tipo
                                    </div>
                                    <div className={"form-input"}>
                                        <select value={selectedOption} onChange={handleOptionChange}>
                                            <option value="Particular">Particular</option>
                                            <option value="Empresa">Empresa</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {selectedOption === 'Particular' && (
                                <>

                                    <div className={"tab-row"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Nome
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}></input>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Apelido
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"tab-row"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Data de nascimento
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"date"}></input>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Local de nascimento
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}></input>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {selectedOption === 'Empresa' && (
                                <>
                                    <div className={"tab-row"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Empresa
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}></input>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Email
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}></input>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Telemóvel
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}></input>
                                    </div>
                                </div>
                            </div>

                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Morada
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}></input>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Cidade
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}></input>
                                    </div>
                                </div>
                            </div>

                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Código postal
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}></input>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        País
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}></input>
                                    </div>
                                </div>
                            </div>
                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Notas pessoais
                                    </div>
                                    <div className={"form-input"}>
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className={"close"}>

                                <div className="button-container final">
                                    <button className={"doc-button close"} onClick={closeWindow}>
                                        Cancelar
                                    </button>
                                    <button className={"doc-button save"}>
                                        Guardar
                                    </button>
                                </div>
                            </div>

                        </div>
                    }></Card>
                </div>
            )}
        </>
    );
}

export default GuarantorsContent