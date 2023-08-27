import Card from "../ui/cards/Card.jsx";

import "../../scss/new_property_content.scss"

const GeneralContent = () => {
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
                          </div>}>
                    </Card>
                    <Card title={"Renda"} className={"form-container"} content={<div className={"form-wrapper1"}>
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
                                <textarea placeholder={"Exemplo: Apartamento renovado, no 1º andar, com vista para o mar..."}/>
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
                    </div>}>
                    </Card>
                </div>
            </div>
        </>

    );
}

export default GeneralContent