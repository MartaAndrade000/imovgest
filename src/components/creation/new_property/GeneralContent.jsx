import Card from "../../ui/cards/Card.jsx";

import "../creation.scss"

import {useState} from "react";

const GeneralContent = ({ onSubmit }) => {

    const [data, setData] = useState({
        propertyType: '',
        identifier: '',
        rentType: '',
        rent: '',
        charges: '',
        address: '',
        address2: '',
        city: '',
        postalCode: '',
        county: '',
        district: '',
        country: '',
        surface: '',
        divisions: '',
        rooms: '',
        bathrooms: '',
        description: '',
        notes: ''

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

    return (<>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Identificação"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Tipo
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <select name="propertyType" value={data.propertyType} onChange={handleInputChange}>
                                          <option>Apartamento</option>
                                          <option>Moradia</option>
                                          <option>Estúdio</option>
                                          <option>Loja</option>
                                          <option>Quarto</option>
                                          <option>Estacionamento</option>
                                          <option>Outro</option>
                                      </select>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Identificador
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"text"} name="identifier" value={data.identifier} onChange={handleInputChange}/>
                                      Digite um ID, referência ou um número exclusivo.
                                  </div>
                              </div>
                          </div>}>
                    </Card>
                    <Card title={"Renda"} className={"form-container"} content={<div className={"form-wrapper1"}>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Tipo de renda
                            </div>
                            <div className={"form-input"}>
                                <select name="rentType" value={data.rentType} onChange={handleInputChange}>
                                    <option>Mobilado</option>
                                    <option>Vazio</option>
                                </select>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Renda Excluindo Encargos
                            </div>
                            <div className={"form-input"}>
                                <input type={"number"} name="rent" value={data.rent} onChange={handleInputChange}/>
                                Valor indicativo.
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Encargos
                            </div>
                            <div className={"form-input"}>
                                <input type={"number"} name="charges" value={data.charges} onChange={handleInputChange}/>
                                Valor indicativo.
                            </div>
                        </div>
                    </div>}>
                    </Card>
                </div>
                <div className={"tab-column"}>
                    <Card title={"Morada"} className={"form-container"} content={<div className={"form-wrapper1"}>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Morada
                                <span className={"mandatory"}>*</span>
                            </div>
                            <div className={"form-input"}>
                                <input className={"text"} name="address" value={data.address} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Morada 2
                            </div>
                            <div className={"form-input"}>
                                <input type={"text"} name="address2" value={data.address2} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Cidade
                                <span className={"mandatory"}>*</span>
                            </div>
                            <div className={"form-input"}>
                                <input type={"text"} name="city" value={data.city} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Código postal
                                <span className={"mandatory"}>*</span>
                            </div>
                            <div className={"form-input"}>
                                <input type={"text"} name="postalCode" value={data.postalCode} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Concelho
                            </div>
                            <div className={"form-input"}>
                                <input type={"text"} name="county" value={data.county} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Distrito
                            </div>
                            <div className={"form-input"}>
                                <input type={"text"} name="district" value={data.district} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                País
                                <span className={"mandatory"}>*</span>
                            </div>
                            <div className={"form-input"}>
                                <input type={"text"} name="country" value={data.country} onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>}>
                    </Card>
                </div>
            </div>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Descrição"} className={"form-container"} content={<div className={"form-wrapper1"}>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Superficie m²
                            </div>
                            <div className={"form-input"}>
                                <input type={"number"} name="surface" value={data.surface} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Número de divisões
                            </div>
                            <div className={"form-input"}>
                                <input type={"number"} name="divisions" value={data.divisions} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Número de quartos
                            </div>
                            <div className={"form-input"}>
                                <input type={"number"} name="rooms" value={data.rooms} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Número de casas de banho
                            </div>
                            <div className={"form-input"}>
                                <input type={"number"} name="bathrooms" value={data.bathrooms} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Descrição
                            </div>
                            <div className={"form-input"}>
                                <textarea
                                    placeholder={"Exemplo: Apartamento renovado, no 1º andar, com vista para o mar..."}
                                    name="description" value={data.description} onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Notas privadas
                            </div>
                            <div className={"form-input"}>
                                <textarea
                                    placeholder={"Exemplo: Chão substituído recentemente..."}
                                    name="notes" value={data.notes} onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>}>
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

export default GeneralContent