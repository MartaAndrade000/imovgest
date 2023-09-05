import Remove from "../../assets/icons/icon_remove.svg"
import Add from "../../assets/icons/icon_plus.svg"
import Contact from "../../assets/icons/icon_phone.svg"

import {useEffect, useState} from "react";
import Card from "../ui/cards/Card.jsx";

import "./fields.scss"

const initFields = {name: '', surname: '', number: '', email: ''};

const ContactsForm = ({emergency, onSubmit}) => {

    const [fields, setFields] = useState([
        initFields,
    ]);

    const [contacts, setContacts] = useState([]);

    const [isWindowOpen, setIsWindowOpen] = useState([false, null]);

    const [selectedOption, setSelectedOption] = useState('Particular');

    useEffect(() => {
        if (isWindowOpen[0]) {
            if (isWindowOpen[1] !== null) setFields(contacts[isWindowOpen[1]])
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

        const updatedFields = { ...fields, type: selectedOption };

        if (isWindowOpen[1] !== null) {
            setContacts((prevContacts) =>
                prevContacts.map((contact, idx) => (idx === isWindowOpen[1] ? updatedFields : contact))
            );
        } else {
            setContacts((prevContacts) => [...prevContacts, updatedFields]);
        }
        closeWindow();
    };


    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const openWindow = (idx) => {
        if (idx !== undefined) {
            const contactToEdit = contacts[idx];
            setSelectedOption(contactToEdit.type);
        }
        setIsWindowOpen([true, idx === undefined ? null : idx]);
    };

    const closeWindow = () => {
        setIsWindowOpen([false, null]);
    };

    const removeField = (index) => {
        setContacts((prevContacts) => prevContacts.filter((_, idx) => idx !== index));
    };

    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        onSubmit(contacts);
    };


    return (
        <>
            <div className={"tab-column"}>
                <Card title={"Contactos"} className={"form-container"} content={
                    <div className={"form-wrapper1"}>
                        <div className="keys-container">
                            {contacts.map((contact, index) => (
                                <div className="form-group" key={index}>
                                    <div className={"form-label"}> Contacto</div>
                                    <div className={"form-input"}>
                                        <div className={"contact-wrapper"}>
                                            <div className={"phone"}>
                                                <img src={Contact}/>
                                            </div>
                                            <div className="contact-item" key={index} >
                                                <a className={"name"}
                                                    onClick={() => {
                                                    openWindow(index)
                                                }}>{contact.name} {contact.surname}
                                                </a>
                                                <div style={{fontSize: 12}}>{contact.type}</div>
                                                <div>{contact.email}</div>
                                                <div>{contact.number}</div>
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
                                    <span> Adicionar Contacto</span>
                                </a>
                                Pode adicionar multiplos contactos.
                            </div>
                        </div>
                    </div>
                }></Card>
            </div>

            {isWindowOpen[0] && (
                <div className="modal contacts">
                    <Card title={"Novo Contacto"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"tab-row"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Contactos
                                    </div>
                                    <div className={"form-input"}>
                                        <select>
                                            <option>Adicionar um novo</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Tipo de contacto
                                    </div>
                                    <div className={"form-input"}>
                                        <select value={selectedOption} onChange={handleOptionChange}>
                                            <option value="Particular">Particular</option>
                                            <option value="Empresa">Empresa</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {!emergency && selectedOption === 'Particular' && (
                                <div>
                                    <div className={"tab-row"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>Tipo</div>
                                            <div className={"form-input"}>
                                                <select>
                                                    <option>Advogado</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {selectedOption === 'Particular' && (
                                <>
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

export default ContactsForm