import {useState} from "react";

import Card from "../../ui/cards/Card.jsx";

import "../creation.scss"
import New from "../../../assets/icons/icon_new.svg";


const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB in bytes
const GeneralContent = ({onSubmit}) => {

    const [selectedOption, setSelectedOption] = useState('Particular');

    const [data, setData] = useState({
        type:'',
        email: '', email2: '', mobileNumber: '', phoneNumber: '', address: '', address2: '', city: '', postalCode: '', district: '', country: '',
        civilStatus: '',
        name: '',
        name2: '',
        surname: '',
        birthday: '',
        nationality: '',
        NIF: '',
        profession: '',
        monthlyIncome: '',
        identificationType: '',
        identificationNumber: '',
        identificationExpiration: '',
        identificationDoc: null,
        companyName: '',
        commercialCertificate: '',
        fieldOfWork: '',

    });

    const handleOptionChange = (e) => {

        const newValue = e.target.value;
        setData((prevData) => ({
            ...prevData,
            type: newValue, // Assuming "type" is the field you want to update in "data"
        }));
        setSelectedOption(newValue);
    };

    const handleBrowse = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', handleFileUpload);
        input.click();
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0]; // Get the first selected file

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
                        identificationDoc: e.target.result, // Store the file data (e.g., as Base64)
                    }));
                };

                // Read the file as Data URL (Base64)
                reader.readAsDataURL(file);
            }
        }
    };

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

    return (
        <>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Tipo"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Tipo de inquilino
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <select value={selectedOption} onChange={handleOptionChange}>
                                        <option value="Particular">Particular</option>
                                        <option value="Empresa">Empresa</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    }>
                    </Card>
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
                                           onChange={handleInputChange}/>
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
                                           onChange={handleInputChange}/>
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
                                        onChange={handleInputChange}/>
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
                    <Card title={"Morada"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Morada
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="address"
                                           value={data.address}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Morada 2
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="address2"
                                           value={data.address2}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Cidade
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="city"
                                           value={data.city}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Código postal
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="postalCode"
                                           value={data.postalCode}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Distrito
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="district"
                                           value={data.district}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    País
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}
                                           name="country"
                                           value={data.country}
                                           onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    }>
                    </Card>
                </div>
            </div>

            {selectedOption === 'Particular' && (
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
                                                   name="name"
                                                   value={data.name}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            2º nome
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}
                                                   name="name2"
                                                   value={data.name2}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Apelido
                                            <span className={"mandatory"}>*</span>
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}
                                                   name="surname"
                                                   value={data.surname}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Data de nascimento
                                            <span className={"mandatory"}>*</span>
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"date"}
                                                   name="birthday"
                                                   value={data.birthday}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Nacionalidade
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}
                                                   name="nationality"
                                                   value={data.nationality}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            NIF
                                            <span className={"mandatory"}>*</span>
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"number"}
                                                   name="NIF"
                                                   value={data.NIF}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                </div>
                            }>
                            </Card>
                        </div>
                        <div className={"tab-column"}>
                            <Card title={"Situação Profissional"} className={"form-container"} content={
                                <div className={"form-wrapper1"}>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Profissão
                                            <span className={"mandatory"}>*</span>
                                        </div>
                                        <div className={"form-input"}>
                                            <input className={"text"}
                                                   name="profession"
                                                   value={data.profession}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Rendimentos Mensais
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}
                                                   name="monthlyIncome"
                                                   value={data.monthlyIncome}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                </div>
                            }>
                            </Card>
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
                                                   name="identificationExpiration"
                                                   value={data.identificationExpiration}
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Documento
                                        </div>
                                        <div className={"form-input"}>
                                            <div className="button-container">
                                                <button
                                                    className={'search-button'}
                                                    onClick={handleBrowse}
                                                >
                                                    <img src={New} alt="New"/>
                                                    Novo
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }>
                            </Card>
                        </div>
                    </div>
            )}

            {selectedOption === 'Empresa' && (
                <div className={"tab-row"}>
                    <div className={"tab-column"}>
                        <Card title={"Informações Sobre a Empresa"} className={"form-container"} content={
                            <div className={"form-wrapper1"}>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Empresa
                                        <span className={"mandatory"}>*</span>
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}
                                               name="companyName"
                                               value={data.name}
                                               onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        NIF
                                        <span className={"mandatory"}>*</span>
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"number"}
                                               name="NIF"
                                               value={data.NIF}
                                               onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Número de certidão comercial
                                        <span className={"mandatory"}>*</span>
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}
                                               name="commercialCertificate"
                                               value={data.commercialCertificate}
                                               onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Campo de atividade
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}
                                               name="fieldOfWork"
                                               value={data.fieldOfWork}
                                               onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Documento
                                    </div>
                                    <div className={"form-input"}>
                                        <div className="button-container">
                                            <button
                                                className={'search-button'}
                                                onClick={handleBrowse}
                                            >
                                                <img src={New} alt="New"/>
                                                Novo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }>
                        </Card>
                    </div>
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

export default GeneralContent