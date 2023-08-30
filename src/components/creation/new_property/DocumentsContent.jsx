import Card from "../../ui/cards/Card.jsx";
import Remove from "../../../assets/icons/icon_remove.svg";
import Add from "../../../assets/icons/icon_plus.svg";
import New from "../../../assets/icons/icon_new.svg";
import Doc from "../../../assets/icons/icon_docs.svg";

import "../creation.scss"
import {useState} from "react";

const DocumentsContent = () => {

    const [fields, setFields] = useState([]);
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const [isNewActive, setIsNewActive] = useState(true);

    const removeFields = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    const openWindow = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    const handleButtonClick = (isNew) => {
        setIsNewActive(isNew);
    }

    return (
        <>
            <div className={"tab-column"}>
                <Card title={"Documentos"} className={"form-container"} content={
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
                            <div className={"form-input"} onClick={openWindow}>
                                <a className={"btn"}>
                                    <img src={Add}/>
                                    <span> Adicionar Documento</span>
                                </a>
                                Pode adicionar multiplos documentos.
                            </div>
                        </div>
                    </div>
                }></Card>
            </div>

            {isWindowOpen && (
                <div className="modal general">
                    <Card title={"Novo Documento"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Tipo
                                </div>
                                <div className={"form-input"}>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>

                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Documento
                                </div>
                                <div className="form-input">
                                    <div className="button-container">
                                        <button
                                            className={`doc-button ${isNewActive ? 'active' : 'inactive'}`}
                                            onClick={() => handleButtonClick(true)}
                                        >
                                            <img src={New} alt="New"/>
                                            Novo
                                        </button>
                                        <button
                                            className={`doc-button ${!isNewActive ? 'active' : 'inactive'}`}
                                            onClick={() => handleButtonClick(false)}
                                        >
                                            <img src={Doc} alt="Doc"/>
                                            Já existente
                                        </button>
                                    </div>

                                    {isNewActive ? (
                                        <div className={"new-doc"}>
                                            <button className="browse-button">Navegar</button>
                                            <span>Formatos possíveis: Word, Excel, PDF, JPG, PNG.</span>
                                            Tamanho máximo: 15 MB
                                        </div>

                                    ) : (
                                        <div className={"new-doc"}>
                                            <select>
                                                <option>1</option>
                                            </select>
                                            <span>Procure nos ficheiros já existentes na secção meus documentos.</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Descrição
                                </div>
                                <div className={"form-input"}>
                                                    <textarea
                                                        placeholder={"Exemplo: Importância, outras informações..."}></textarea>
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

export default DocumentsContent