import {useEffect, useState} from "react";
import Card from "../ui/cards/Card.jsx";

import Remove from "../../assets/icons/icon_remove.svg"
import Add from "../../assets/icons/icon_plus.svg"
import User from "../../assets/icons/icon_profile.svg";

import "./fields.scss"

const initFields = {
    name: '', surname: '', number: '', email: '', address:'', city: '', postalCode: '', country: '', notes: '',
    NIF:'',
    CC: '',
    birthday: '',
    nationality: '',
    businessRegistration: '',
};

const GuarantorsForm = ({onSubmit, residentID, residentValues}) => {

    const [fields, setFields] = useState([initFields]);

    const [guarantors, setGuarantors] = useState([]);

    const [isWindowOpen, setIsWindowOpen] = useState([false, null]);

    const [selectedOption, setSelectedOption] = useState('Particular');

    useEffect(() => {
        if (isWindowOpen[0]) {
            if (isWindowOpen[1] !== null) {
                setFields(guarantors[isWindowOpen[1]]);
            } else {
                // If not editing, setFields to initial fields (blank)
                setFields(initFields);
            }
        } else {
            setFields([initFields]);
        }
    }, [isWindowOpen]);

    useEffect(() => {
        // Find residents with matching NIF and collect their guarantorsInfo
        const matchingGuarantors = residentValues.reduce((accumulator, resident) => {
            if (resident.generalInfo && resident.generalInfo.NIF === residentID) {
                accumulator.push(...(resident.guarantorsInfo || [])); // Collect guarantorsInfo if it exists
            }
            return accumulator;
        }, []);

        setGuarantors(matchingGuarantors);
    }, [residentID, residentValues]);



    const handleInputChange = (field, value) => {
        setFields((prevFields) => ({
            ...prevFields,
            [field]: value,
        }));
    };

    const handleSave = () => {

        const updatedFields = { ...fields, type: selectedOption };

        if (isWindowOpen[1] !== null) {
            setGuarantors((prevGuarantors) =>
                prevGuarantors.map((guarantor, idx) => (idx === isWindowOpen[1] ? updatedFields : guarantor))
            );
        } else {
            setGuarantors((prevGuarantors) => [...prevGuarantors, updatedFields]);
        }
        closeWindow();
    };



    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const openWindow = (idx) => {
        if (idx !== undefined) {
            const contactToEdit = guarantors[idx];
            setSelectedOption(contactToEdit.type);
        }
        setIsWindowOpen([true, idx === undefined ? null : idx]);
    };

    const closeWindow = () => {
        setIsWindowOpen([false, null]);
    };

    const removeField = (index) => {
        setGuarantors((prevContacts) => prevContacts.filter((_, idx) => idx !== index));
    };

    const handleSubmit = () => {
        onSubmit(guarantors);
    };

    return (
        <>
            <div className={"tab-column"}>
                <Card title={"Fiadores"} className={"form-container"} content={
                    <div className={"form-wrapper1"}>
                        <div className="keys-container">
                            {guarantors.map((guarantor, index) => (
                                <div className="form-group" key={index}>
                                    <div className={"form-label"}> Fiador</div>
                                    <div className={"form-input"}>
                                        <div className={"element-wrapper"}>
                                            <div className={"icon"}>
                                                <img src={User}/>
                                            </div>
                                            <div className="element-item" key={index} >

                                                <a className={"name"}
                                                   onClick={() => {
                                                       openWindow(index)
                                                   }}>{guarantor.name} {guarantor.surname}
                                                </a>
                                                <div style={{fontSize: 12}}>{guarantor.type}</div>
                                                <div>{guarantor.email}</div>
                                                <div>{guarantor.number}</div>

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
                                    <span> Adicionar Fiador</span>
                                </a>
                                Pode adicionar multiplos fiadores.
                            </div>
                        </div>
                    </div>
                }></Card>
            </div>

            {isWindowOpen[0] && (
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
                                                NIF
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}
                                                       value={fields.NIF}
                                                       onChange={(e) => handleInputChange('NIF', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Identificação
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}
                                                       value={fields.CC}
                                                       onChange={(e) => handleInputChange('CC', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"tab-row"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Nome
                                            </div>
                                            <div className={"form-input"}>
                                                <input
                                                    type="text"
                                                    value={fields.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Apelido
                                            </div>
                                            <div className={"form-input"}>
                                                <input
                                                    type="text"
                                                    value={fields.surname}
                                                    onChange={(e) => handleInputChange('surname', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"tab-row"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Data de nascimento
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"date"}
                                                       value={fields.birthday}
                                                       onChange={(e) => handleInputChange('birthday', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Nacionalidade
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}
                                                       value={fields.nationality}
                                                       onChange={(e) => handleInputChange('nationality', e.target.value)}
                                                />
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
                                                <input
                                                    type="text"
                                                    value={fields.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Registo Comercial
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}
                                                       value={fields.businessRegistration}
                                                       onChange={(e) => handleInputChange('businessRegistration', e.target.value)}
                                                />
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
                                        <input
                                            type="text"
                                            value={fields.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Telemóvel
                                    </div>
                                    <div className={"form-input"}>
                                        <input
                                            type="number"
                                            value={fields.number}
                                            onChange={(e) => handleInputChange('number', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Morada
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}
                                               value={fields.address}
                                               onChange={(e) => handleInputChange('address', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Cidade
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}
                                               value={fields.city}
                                               onChange={(e) => handleInputChange('city', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Código postal
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}
                                               value={fields.postalCode}
                                               onChange={(e) => handleInputChange('postalCode', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        País
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}
                                               value={fields.country}
                                               onChange={(e) => handleInputChange('country', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Notas pessoais
                                    </div>
                                    <div className={"form-input"}>
                                        <textarea value={fields.notes}
                                                  onChange={(e) => handleInputChange('notes', e.target.value)}
                                        />
                                    </div>
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

export default GuarantorsForm