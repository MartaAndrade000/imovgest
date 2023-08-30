import {useState} from "react";

import Card from "../../ui/cards/Card.jsx";

import "../creation.scss"
import New from "../../../assets/icons/icon_new.svg";



const GeneralContent = () => {

    const [selectedOption, setSelectedOption] = useState('Particular');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleBrowse = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.click();
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
                                    <input type={"text"}></input>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    E-mail secundário
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Telemóvel
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Telefone
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
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
                                    <input className={"text"}></input>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Morada 2
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Cidade
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Código postal
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Distrito
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    País
                                    <span className={"mandatory"}>*</span>
                                </div>
                                <div className={"form-input"}>
                                    <select>
                                        <option>Portugal</option>
                                        <option>2</option>
                                    </select>
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
                                            <select>
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
                                            <input type={"text"}></input>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            2º nome
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}></input>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Apelido
                                            <span className={"mandatory"}>*</span>
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}></input>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Data de nascimento
                                            <span className={"mandatory"}>*</span>
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"date"}></input>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Nacionalidade
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}></input>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            NIF
                                            <span className={"mandatory"}>*</span>
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"number"}></input>
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
                                            <input className={"text"}></input>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Rendimentos Mensais
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"text"}/>
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
                                            <select>
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
                                            <input type={"number"}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Expiração
                                        </div>
                                        <div className={"form-input"}>
                                            <input type={"date"}/>
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
                                        <input type={"text"}/>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Número De Iva
                                        <span className={"mandatory"}>*</span>
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}/>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        NIF
                                        <span className={"mandatory"}>*</span>
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"number"}></input>
                                    </div>
                                </div>
                                <div className={"form-group"}>
                                    <div className={"form-label"}>
                                        Campo de atividade
                                    </div>
                                    <div className={"form-input"}>
                                        <input type={"text"}/>
                                    </div>
                                </div>
                            </div>
                        }>
                        </Card>
                    </div>
                </div>
            )}

        </>
    );
}

export default GeneralContent