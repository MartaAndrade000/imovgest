import Card from "../../ui/cards/Card.jsx";
import Remove from "../../../assets/icons/icon_remove.svg";
import Add from "../../../assets/icons/icon_plus.svg";
import New from "../../../assets/icons/icon_new.svg";
import Doc from "../../../assets/icons/icon_docs.svg";

import "../creation.scss"
import {useEffect, useState} from "react";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB in bytes

const initFields = {
    type: '',
    file: null,
    existingDocument: '',
    documentDescription: '',
    documentStartDate: '',
    documentEndDate: ''
};

const InsuranceContent = ({onSubmit}) => {

    const [fields, setFields] = useState([
        initFields,
    ]);

    const [docs, setDocs] = useState([]);

    const [isWindowOpen, setIsWindowOpen] = useState([false, null]);

    const [isNewActive, setIsNewActive] = useState([]);

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        if (isWindowOpen[0]) {
            if (isWindowOpen[1] !== null) setFields(docs[isWindowOpen[1]])
        } else {
            setFields([initFields])
        }
    }, [isWindowOpen]);

    const handleInputChange = (field, value) => {
        setFields((prevFields) => ({
            ...prevFields,
            [field]: value,
        }));
    };

    const handleSave = () => {

        const updatedFields = {...fields, type: selectedOption};

        if (isWindowOpen[1] !== null) {
            setDocs((prevDocs) =>
                prevDocs.map((doc, idx) => (idx === isWindowOpen[1] ? updatedFields : doc))
            );
        } else {
            setDocs((prevDocs) => [...prevDocs, updatedFields]);
        }
        closeWindow();
    };

    const openWindow = (idx) => {
        if (idx !== undefined) {
            const docToEdit = docs[idx];
            setSelectedOption(docToEdit.type);
        }
        setIsWindowOpen([true, idx === undefined ? null : idx]);
    };

    const closeWindow = () => {
        setIsWindowOpen([false, null]);
    };

    const removeField = (index) => {
        setDocs((prevDocs) => prevDocs.filter((_, idx) => idx !== index));
    };

    const handleButtonClick = (isNew) => {
        setIsNewActive(isNew);
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file

        if (file) {
            if (file.size > MAX_FILE_SIZE_BYTES) {
                // Check if the file exceeds the maximum allowed size
                alert('File size exceeds the maximum limit of 10MB.'); // You can display an error message to the user
            } else {
                const reader = new FileReader();

                reader.onload = (e) => {
                    // When the file is loaded and within the size limit, store it in the state
                    setFields((prevFields) => ({
                        ...prevFields,
                        file: e.target.result,
                    }));
                };

                reader.readAsDataURL(file);
            }
        }
    };

    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        onSubmit(docs);
    };

    return (
        <>
            <div className={"tab-column"}>
                <Card title={"Certificados e Seguros"} className={"form-container"} content={
                    <div className={"form-wrapper1"}>
                        <div className="keys-container">
                            {docs.map((doc, index) => (
                                <div className="form-group" key={index}>
                                    <div className={"form-label"}> Documento</div>
                                    <div className={"form-input"}>
                                        <div className={"element-wrapper"}>
                                            <div className={"icon"}>
                                                <img src={Doc}/>
                                            </div>
                                            <div className="element-item" key={index}>
                                                <a className={"name"}
                                                   onClick={() => {
                                                       openWindow(index)
                                                   }}>{doc.type}
                                                </a>
                                                <div>{doc.fileName}</div>
                                                <div>{doc.documentDescription}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="remove-button"
                                            onClick={() => removeField(index)}>
                                        <img src={Remove}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}></div>
                            <div className={"form-input"} onClick={() => openWindow()}>
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

            {isWindowOpen[0] && (
                <div className="modal insurance">
                    <Card title={"Novo Documento"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Tipo
                                </div>
                                <div className={"form-input"}>
                                    <select value={selectedOption} onChange={handleOptionChange}>
                                        <option value="" disabled>Escolher</option>
                                        <option>Contrato de manutenção da caldeira</option>
                                        <option>Contrato de água</option>
                                        <option>Contrato de eletricidade</option>
                                        <option>Contrato de gás</option>
                                        <option>Contrato de internet</option>
                                        <option>Contrato telefónico</option>
                                        <option>Contrato de jardinagem</option>
                                        <option>Contrato de piscina</option>
                                        <option>Contrato de manutenção de ar condicionado</option>
                                        <option>Diagnóstico de gás</option>
                                        <option>Diagnóstico de desempenho energético</option>
                                        <option>Avaliação de risco de incêndio</option>
                                        <option>Verificação de alarme de incêndio</option>
                                        <option>Certificado energético</option>
                                        <option>Seguro multirisco</option>
                                        <option>Outro</option>
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
                                            <label className="custom-file-input">
                                                <input
                                                    type="file"
                                                    accept=".pdf, .doc, .jpg, .jpeg, .png"
                                                    onChange={(e) => handleFileInputChange(e)}
                                                    style={{display: 'none'}}
                                                />
                                                <div className="browse-button">
                                                    Navegar
                                                </div>
                                                Formatos possíveis: Word, Excel, PDF, JPG, PNG.<br/>
                                                Tamanho máximo: 15 MB
                                            </label>
                                        </div>

                                    ) : (
                                        <div className={"new-doc"}>
                                            <select>
                                                <option>None</option>
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
                                        placeholder={"Exemplo: Importância, outras informações..."}
                                        value={fields.documentDescription}
                                        onChange={(e) => handleInputChange('documentDescription', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Data de início
                                </div>
                                <div className={"form-input"}>
                                    <input type={"date"}
                                           value={fields.documentStartDate}
                                           onChange={(e) => handleInputChange('documentStartDate', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Data de vencimento
                                </div>
                                <div className={"form-input"}>
                                    <input type={"date"}
                                           value={fields.documentEndDate}
                                           onChange={(e) => handleInputChange('documentEndDate', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={"close"}>

                                <div className="button-container final">
                                    <button className={"doc-button close"} onClick={closeWindow}>
                                        Cancelar
                                    </button>
                                    <button className={"doc-button save"} onClick={handleSave}>
                                        Guardar
                                    </button>
                                </div>
                            </div>

                        </div>
                    }></Card>
                </div>
            )}
            <div className="button-container final">
                <button className={"doc-button close"}>
                    Cancelar
                </button>
                <button className={"doc-button save"} onClick={handleSubmit}>
                    Guardar
                </button>
            </div>
        </>
    );
}

export default InsuranceContent