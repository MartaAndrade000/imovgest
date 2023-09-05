import Card from "../../ui/cards/Card.jsx";
import Remove from "../../../assets/icons/icon_remove.svg";
import Add from "../../../assets/icons/icon_plus.svg";

import "../creation.scss"
import {useState} from "react";

const AdditionalContent = ({onSubmit}) => {

    const [fields, setFields] = useState([]);

    const [data, setData] = useState({
        registerNumber: '',
        licenseNumber: '',
        article: '',
        residentialTax: '',
        propertyTax: '',
        acquisitionDate: '',
        buyPrice: '',
        acquisitionPrice: '',
        presentPrice: '',
        parkingSpots: '',
        storageSpace: '',
        equipment: {
            wifiAccess: false,
            balcony: false,
            gym: false,
            laundry: false,
            pool: false,
            blinds: false,
            elevator: false,
            storage: false,
            parking: false,
            terrace: false,
            garage: false,
            airConditioner: false,
            intercom: false,
            grill: false,
            furnished: false,
            petsAllowed: false,
            smokingAllowed: false,
        },

        accessCodes: [],
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        // Update the data object with the new checkbox value
        setData((prevData) => ({
            ...prevData,
            equipment: {
                ...prevData.equipment,
                [name]: checked,
            },
        }));
    };

    const updateDataWithFields = () => {
        // Map the fields to create an array of objects with description and code
        const accessCodes = fields.map((field) => ({ description: field.description, code: field.code }));

        // Update the data state with the new accessCodes array
        setData((prevData) => ({
            ...prevData,
            accessCodes: accessCodes,
        }));
    };


    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        onSubmit(data);
    };


    const addFields = () => {
        setFields([...fields, {description: '', code: ''}]);

    };

    const removeFields = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);

        setData((prevData) => ({
            ...prevData,
            accessCodes: updatedFields,
        }));
    };

    return (
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
                                                           updatedFields[index] = {
                                                               ...updatedFields[index],
                                                               description: e.target.value,
                                                           };
                                                           setFields(updatedFields);
                                                       }}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Code"
                                                    value={field.code}
                                                    onChange={(e) => {
                                                        const updatedFields = [...fields];
                                                        updatedFields[index] = {
                                                            ...updatedFields[index],
                                                            code: e.target.value,
                                                        };
                                                        setFields(updatedFields);
                                                        updateDataWithFields()

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
                                    <input type={"number"} name="registerNumber" value={data.registerNumber}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Número de licença
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"} name="licenseNumber" value={data.licenseNumber}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Artigo
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"} name="article" value={data.article}
                                           onChange={handleInputChange}/>
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
                                    <input type={"number"} name="residentialTax" value={data.residentialTax}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Imposto sobre a propriedade
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"} name="propertyTax" value={data.propertyTax}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Data de aquisição
                                </div>
                                <div className={"form-input"}>
                                    <input type={"date"} name="acquisitionDate" value={data.acquisitionDate}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Preço de compra
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"} name="buyPrice" value={data.buyPrice}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Custo de aquisição
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"} name="acquisitionPrice" value={data.acquisitionPrice}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Valor presente
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"} name="presentPrice" value={data.presentPrice}
                                           onChange={handleInputChange}/>
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
                                        <input type="checkbox"
                                               id="furnished"
                                               name="furnished"
                                               className="switch-input"
                                               checked={data.equipment.furnished}
                                               onChange={handleCheckboxChange}/>
                                        <label htmlFor="furnished" className="switch-label">
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
                                        <input type="checkbox"
                                               id="petsAllowed"
                                               name="petsAllowed"
                                               className="switch-input"
                                               checked={data.equipment.petsAllowed}
                                               onChange={handleCheckboxChange}/>
                                        <label htmlFor="petsAllowed" className="switch-label">
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
                                        <input type="checkbox"
                                               id="smokingAllowed"
                                               name="smokingAllowed"
                                               className="switch-input"
                                               checked={data.equipment.smokingAllowed}
                                               onChange={handleCheckboxChange}/>
                                        <label htmlFor="smokingAllowed" className="switch-label">
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
                                                <input type={"checkbox"}
                                                       name="wifiAccess"
                                                       checked={data.equipment.wifiAccess}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Acesso WiFi</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="balcony"
                                                       checked={data.equipment.balcony}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Varanda</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="gym"
                                                       checked={data.equipment.gym}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Ginásio</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="laundry"
                                                       checked={data.equipment.laundry}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Lavandaria</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="pool"
                                                       checked={data.equipment.pool}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Piscina</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="blinds"
                                                       checked={data.equipment.blinds}
                                                       onChange={handleCheckboxChange}/>
                                                <label>Estores Automáticos</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="elevator"
                                                       checked={data.equipment.elevator}
                                                       onChange={handleCheckboxChange}/>
                                                <label>Elevador</label>
                                            </div>
                                        </div>
                                        <div className={"column"}>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="storage"
                                                       checked={data.equipment.storage}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Arrecadação</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="parking"
                                                       checked={data.equipment.parking}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Estacionamento</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="terrace"
                                                       checked={data.equipment.terrace}
                                                       onChange={handleCheckboxChange}/>
                                                <label>Terraço</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="garage"
                                                       checked={data.equipment.garage}
                                                       onChange={handleCheckboxChange}/>
                                                <label> Garagem</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="airConditioner"
                                                       checked={data.equipment.airConditioner}
                                                       onChange={handleCheckboxChange}/>
                                                <label>Ar Condicionado</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="intercom"
                                                       checked={data.equipment.intercom}
                                                       onChange={handleCheckboxChange}/>
                                                <label>Intercomunicador</label>
                                            </div>
                                            <div className={"check-box"}>
                                                <input type={"checkbox"}
                                                       name="grill"
                                                       checked={data.equipment.grill}
                                                       onChange={handleCheckboxChange}/>
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
                                    <input type="number" name="parkingSpots" value={data.parkingSpots}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Arrecadação m²
                                </div>
                                <div className={"form-input"}>
                                    <input type="number" name="storageSpace" value={data.storageSpace}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>

                    }></Card>
                </div>
            </div>
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

export default AdditionalContent