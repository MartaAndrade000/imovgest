import {useState} from "react";

import Card from "../../ui/cards/Card.jsx";

import "../creation.scss"
import New from "../../../assets/icons/icon_new.svg";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB in bytes

const OwnerContent = ( {onSubmit} ) => {

    const handleBrowse = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.click();
    };


    const [data, setData] = useState({
        email: '',
        email2: '',
        mobileNumber: '',
        phoneNumber: '',
        identificationType: '',
        identificationNumber: '',
        expirationDate: '',
        civilStatus: '',
        ownerName: '',
        ownerName2: '',
        ownerSurname: '',
        ownerBirthday: '',
        ownerNationality: '',
        ownerNIF: '',
        ownerAddress: '',
        ownerAddress2: '',
        ownerCity: '',
        ownerPostalCode: '',
        ownerDistrict: '',
        ownerCountry: '',
        file: null,
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                    // When the file is loaded and within the size limit, store it in the data state
                    setData((prevData) => ({
                        ...prevData,
                        file: e.target.result, // This is the data URL
                    }));
                };
            }
        }
    };

    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        onSubmit(data);
    };

    return (
        <>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Informações de Contacto"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    E-mail
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="email"
                                           value={data.email}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    E-mail secundário
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="email2"
                                           value={data.email2}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Telemóvel
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}
                                           name="mobileNumber"
                                           value={data.mobileNumber}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Telefone
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}
                                           name="phoneNumber"
                                           value={data.phoneNumber}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    }>
                    </Card>
                </div>
                <div className={"tab-column"}>
                    <Card title={"Documento de Identificação"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Tipo
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <select name="identificationType" value={data.identificationType} onChange={handleInputChange}>
                                        <option>Cartão de Cidadão</option>
                                        <option>Passaporte</option>
                                        <option>Autorização de Residência</option>
                                    </select>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Número
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}
                                           name="identificationNumber"
                                           value={data.identificationNumber}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Expiração
                                </div>
                                <div className={"form-input"}>
                                    <input type={"date"}
                                           name="expirationDate"
                                           value={data.expirationDate}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Documento
                                </div>
                                <div className={"form-input"}>
                                    <div className="button-container">
                                        <label className="custom-file-input">
                                            <input
                                                type="file"
                                                accept=".pdf, .doc, .jpg, .jpeg, .png"
                                                onChange={handleFileInputChange}
                                                style={{ display: 'none' }}
                                            />
                                            <div className="search-button">
                                                <img src={New} alt="New" />
                                                Novo
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }>
                    </Card>
                </div>
            </div>

            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Informações Pessoais"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Estado Civil
                                </div>
                                <div className={"form-input"}>
                                    <select name="civilStatus" value={data.civilStatus} onChange={handleInputChange}>
                                        <option>Solteiro</option>
                                        <option>Casado</option>
                                        <option>Divorciado</option>
                                    </select>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Nome
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerName"
                                           value={data.ownerName}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    2º nome
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerName2"
                                           value={data.ownerName2}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Apelido
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerSurname"
                                           value={data.ownerSurname}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Data de nascimento
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"date"}
                                           name="ownerBirthday"
                                           value={data.ownerBirthday}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Nacionalidade
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerNationality"
                                           value={data.ownerNationality}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    NIF
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}
                                           name="ownerNIF"
                                           value={data.ownerNIF}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    }>
                    </Card>
                </div>
                <div className={"tab-column"}>

                    <Card title={"Morada"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Morada
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerAddress"
                                           value={data.ownerAddress}
                                           onChange={handleInputChange}

                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Morada 2
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerAddress2"
                                           value={data.ownerAddress2}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Cidade
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerCity"
                                           value={data.ownerCity}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Código postal
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="pwnerPostalCode"
                                           value={data.ownerPostalCode}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Distrito
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerDistrict"
                                           value={data.ownerDistrict}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    País
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="ownerCountry"
                                           value={data.ownerCountry}
                                           onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    }>
                    </Card>
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

export default OwnerContent