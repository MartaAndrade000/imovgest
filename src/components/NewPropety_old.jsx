import Home from "../assets/icons/icon_property.svg"
import Add from "../assets/icons/icon_plus.svg"
import Remove from "../assets/icons/icon_remove.svg"
import New from "../assets/icons/icon_new.svg"
import Doc from "../assets/icons/icon_docs.svg"

import "../scss/new_property_old.scss"
import Card from "./ui/cards/Card.jsx";
import {useState} from "react";

const NewProperty = () => {

    const [fields, setFields] = useState([]);
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const toggleButtons = document.querySelectorAll('.doc-button');
    const [isNewActive, setIsNewActive] = useState(true);
    const [uploadedImages, setUploadedImages] = useState([]);

    const openWindow = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    const addFields = () => {
        setFields([...fields, {description: '', code: ''}]);
    };

    const removeFields = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    const handleChange = (e) => {

        const headers = document.querySelectorAll(".tab-item");
        headers.forEach((header) => {
            header.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        const href = e.currentTarget.children[0].getAttribute("href");

        const panel = document.getElementById(href);

        const contents = document.querySelectorAll(".tab-panel");
        contents.forEach((content) => {
            content.classList.remove("active");
        });
        panel.classList.add("active");
    };

    const handleButtonClick = (isNew) => {
        setIsNewActive(isNew);
    }

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('inactive');
            });

            button.classList.remove('inactive');
            button.classList.add('active');
        });
    });

    const handleImageUpload = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages([...uploadedImages, ...imagesArray]);
    };

    const handleImageRemove = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages([...uploadedImages, ...imagesArray]);
    };


    return (
        <div className={"main-container"}>
            <ul className="path-bar">
                <li>
                    <a href="#" style={{height: 20}}>
                        <img src={Home} alt="Property Icon" className="path-icon"/>
                    </a>
                </li>
                <li><a href="#" className="path-link">Imóveis</a></li>
                <li><a href="#" className="path-link">Nova Unidade</a></li>
            </ul>

            <div className={"property-creation-wrapper"}>

                <div className={"tab-title"}>
                    <ul className={"tab-list"}>
                        <li>
                            <div className={"tab-item active"} onClick={handleChange}>
                                <a href="#generalInfo">Informações Geral</a>
                            </div>
                        </li>
                        <li>
                            <div className={"tab-item"} onClick={handleChange}>
                                <a href="#additionalInfo"> Informações Adicionais</a>
                            </div>
                        </li>
                        <li>
                            <div className={"tab-item"} onClick={handleChange}>
                                <a href="#certificates-and-insurance">Certificados e Seguros</a>
                            </div>
                        </li>
                        <li>
                            <div className={"tab-item"} onClick={handleChange}>
                                <a href="#photos">Fotografias</a>
                            </div>
                        </li>
                        <li>
                            <div className={"tab-item"} onClick={handleChange}>
                                <a href="#contacts">Contactos</a>
                            </div>
                        </li>
                        <li>
                            <div className={"tab-item"} onClick={handleChange}>
                                <a href="#documents">Documentos</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-panel active" id="#generalInfo">
                        <div className={"tab-row"}>
                            <div className={"tab-column"}>
                                <Card title={"Identificação"} className={"form-container"} content={
                                    <div className={"form-wrapper1"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Tipo
                                                <span className={"mandatory"}>*</span>
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
                                                Identificador
                                                <span className={"mandatory"}>*</span>
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}/>
                                                Digite um ID, referência ou um número exclusivo.
                                            </div>
                                        </div>
                                    </div>
                                }>
                                </Card>
                                <Card title={"Renda"} className={"form-container"} content={
                                    <div className={"form-wrapper1"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Tipo de renda
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
                                                Renda Excluindo Encargos
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                                Valor indicativo.
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Encargos
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                                Valor indicativo.
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
                                                Concelho
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
                        <div className={"tab-row"}>
                            <div className={"tab-column"}>
                                <Card title={"Descrição"} className={"form-container"} content={
                                    <div className={"form-wrapper1"}>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Superficie m²
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Número de divisões
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Número de quartos
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Número de casas de banho
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Descrição
                                            </div>
                                            <div className={"form-input"}>
                                                <textarea
                                                    placeholder={"Exemplo: Apartamento renovado, no 1º andar, com vista para o mar..."}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Notas privadas
                                            </div>
                                            <div className={"form-input"}>
                                                <textarea placeholder={"Exemplo: Chão substituído recentemente..."}/>
                                            </div>
                                        </div>
                                    </div>
                                }>
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div className="tab-panel" id="#additionalInfo">
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
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Número de licença
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Artigo
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"text"}/>
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
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Imposto sobre a propriedade
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Data de aquisição
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"date"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Preço de compra
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Custo de aquisição
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Valor presente
                                            </div>
                                            <div className={"form-input"}>
                                                <input type={"number"}/>
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
                                                    <input type="checkbox" id="switch1" className="switch-input"/>
                                                    <label htmlFor="switch1" className="switch-label">
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
                                                    <input type="checkbox" id="switch2" className="switch-input"/>
                                                    <label htmlFor="switch2" className="switch-label">
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
                                                    <input type="checkbox" id="switch3" className="switch-input"/>
                                                    <label htmlFor="switch3" className="switch-label">
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
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Acesso WiFi</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Varanda</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Ginásio</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Lavandaria</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Piscina</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label>Estores Automáticos</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label>Elevador</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Arrecadação</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Estacionamento</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label>Terraço</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label> Garagem</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label>Ar Condicionado</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label>Intercomunicador</label>
                                                    </div>
                                                    <div className={"check-box"}>
                                                        <input type={"checkbox"}/>
                                                        <label>Churrasqueira</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Lugares de Estacionamento
                                            </div>
                                            <div className={"form-input"}>
                                                <input type="number"/>
                                            </div>
                                        </div>
                                        <div className={"form-group"}>
                                            <div className={"form-label"}>
                                                Arrecadação m²
                                            </div>
                                            <div className={"form-input"}>
                                                <input type="number"/>
                                            </div>
                                        </div>
                                    </div>

                                }></Card>
                            </div>
                        </div>
                    </div>

                    <div className="tab-panel" id="#certificates-and-insurance">

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
                            <div className="modal">
                                <div className={"tab-column"}>
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
                                            <div className={"form-group"}>
                                                <div className={"form-label"}>
                                                    Data de início
                                                </div>
                                                <div className={"form-input"}>
                                                    <input type={"date"}></input>
                                                </div>
                                            </div>
                                            <div className={"form-group"}>
                                                <div className={"form-label"}>
                                                    Data de vencimento
                                                </div>
                                                <div className={"form-input"}>
                                                    <input type={"date"}></input>
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
                            </div>
                        )}
                    </div>

                    <div className="tab-panel" id="#photos">

                        <div className={"tab-column"}>
                            <Card title={"Fotografias"} className={"form-container"} content={
                                <div className={"form-wrapper1"}>
                                    <div className={"form-group"}>
                                        <div className={"form-label"}>
                                            Fotos
                                        </div>
                                        <div className={"form-input"}>
                                            <label
                                                htmlFor="image-upload"
                                                className="upload-area"
                                                onDragOver={handleDragOver}
                                                onDrop={handleDrop}
                                            >
                                                Clique aqui ou arraste uma imagem para adicionar
                                            </label>
                                            <input
                                                type="file"
                                                id="image-upload"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                multiple
                                            />
                                            <div className="uploaded-images">
                                                {uploadedImages.map((image, index) => (
                                                    <div className="uploaded-image" key={index}>
                                                        <img src={image} alt={`Uploaded ${index}`}/>
                                                        <span onClick={() => handleImageRemove(index)}>Remover</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }></Card>
                        </div>

                    </div>

                    <div className="tab-panel" id="#contacts">
                        <div className={"tab-column"}>
                            <Card title={"Contactos"} className={"form-container"} content={
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
                                                <span> Adicionar Contacto</span>
                                            </a>
                                            Pode adicionar multiplos contactos.
                                        </div>
                                    </div>
                                </div>
                            }></Card>
                        </div>

                        {isWindowOpen && (
                            <div className="modal contacts">
                                <Card title={"Novo Documento"} className={"form-container"} content={
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
                                                    <select>
                                                        <option>Particular</option>
                                                        <option>Empresa</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"tab-row"}>
                                            <div className={"form-group"}>
                                                <div className={"form-label"}>
                                                    Tipo
                                                </div>
                                                <div className={"form-input"}>
                                                    <select>
                                                        <option>Advogado</option>
                                                        <option>2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

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
                    </div>

                    <div className="tab-panel" id="#documents">

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
                            <div className="modal">
                                <div className={"tab-column"}>
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
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewProperty