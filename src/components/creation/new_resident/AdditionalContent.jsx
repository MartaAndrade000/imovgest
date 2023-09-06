import Card from "../../ui/cards/Card.jsx";

import "../creation.scss"
import {useState} from "react";


const AdditionalContent = ( {onSubmit} ) => {

    const [data, setData] = useState({
        bank:'',
        country: '',
        IBAN: '',
        SWIFT_BIC: '',
        newAddress: '',
        notes: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        onSubmit(data);
    };

    return(
        <>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Informações Bancárias"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Banco
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="bank"
                                           value={data.bank}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    País
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="country"
                                           value={data.country}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    IBAN
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="IBAN"
                                           value={data.IBAN}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    SWIFT/BIC
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="SWIFT_BIC"
                                           value={data.SWIFT_BIC}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    }></Card>
                </div>

                <div className={"tab-column"}>
                    <Card title={"Informações Adicionais"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Nova Morada
                                </div>
                                <div className={"form-input"}>
                                    <textarea className={"additional"}
                                              name="newAddress"
                                              value={data.newAddress}
                                              onChange={handleInputChange}
                                    />
                                    Nova morada do inquilino para futura correspondência.
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Notas Privadas
                                </div>
                                <div className={"form-input"}>
                                    <textarea className={"additional"}
                                              placeholder={"Exemplo: Inquilino estável e organizado..."}
                                              name="notes"
                                              value={data.notes}
                                              onChange={handleInputChange}
                                    />
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