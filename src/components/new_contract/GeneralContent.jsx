import Card from "../ui/cards/Card.jsx";
import Remove from "../../assets/icons/icon_remove.svg";
import Add from "../../assets/icons/icon_plus.svg";
import {useState} from "react";

const GeneralContent = () => {

    const [fields, setFields] = useState([]);
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const calculateDuration = () => {

        const startDateObj = new Date(startDate.replace(/-/g, '/'));
        const endDateObj = new Date(endDate.replace(/-/g, '/'));

        const timeDiff = endDateObj - startDateObj;

        console.log(startDateObj)
        console.log(endDateObj)
        console.log(timeDiff)
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        console.log(days)

        const years = Math.floor(days / 365);
        console.log(years)
        const remainingDays = days % 365;
        console.log(remainingDays)

        return `${years} anos e ${remainingDays} dias`;
    };


    const handleSwitchChange = (e) => {
        setIsSwitchChecked(e.target.checked);
    };
    const addFields = () => {
        setFields([...fields, {description: '', amount: '', iva: ''}]);
    };

    const removeFields = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    return (
        <>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Propriedade e Inquilino"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Propriedade
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
                                      Inquilino
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <select>
                                          <option>1</option>
                                          <option>2</option>
                                      </select>
                                  </div>
                              </div>
                          </div>}>
                    </Card>
                    <Card title={"Renda"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Renda Excluindo encargos
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"} placeholder={"Montante"}/>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"} placeholder={"IVA"}/>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      encargos
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"} placeholder={"Montante"}/>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"} placeholder={"IVA"}/>
                                  </div>
                              </div>

                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Renda incluindo despesas
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"}/>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Retenção de IRS
                                  </div>
                                  <div className={"form-input"}>
                                      <select>
                                          <option>1</option>
                                          <option>2</option>
                                      </select>
                                  </div>
                              </div>
                          </div>}>
                    </Card>
                    <Card title={"Serviços Extras"} className={"form-container"}
                          content={
                              <div className={"form-wrapper1"}>
                                  <div className="keys-container">
                                      <div className={"form-group"}>
                                          <div className={"form-label"}>
                                              Serviço
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"number"} placeholder={"Descrição"}/>
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"number"} placeholder={"Montante"}/>
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"number"} placeholder={"IVA"}/>
                                          </div>
                                          <button className="remove-button"
                                                  onClick={() => removeFields(index)}>
                                              <img src={Remove}/>
                                          </button>
                                      </div>
                                      {fields.map((field, index) => (
                                          <div className={"form-group"}>
                                              <div className={"form-label"}>
                                                  Serviço
                                              </div>
                                              <div className={"form-input"}>
                                                  <input type={"number"} placeholder={"Descrição"}/>
                                              </div>
                                              <div className={"form-input"}>
                                                  <input type={"number"} placeholder={"Montante"}/>
                                              </div>
                                              <div className={"form-input"}>
                                                  <input type={"number"} placeholder={"IVA"}/>
                                              </div>

                                              <button className="remove-button"
                                                      onClick={() => removeFields(index)}>
                                                  <img src={Remove}/>
                                              </button>
                                          </div>
                                      ))}
                                  </div>

                                  <div className={"form-group"}>
                                      <div className={"form-label"}></div>
                                      <div className={"form-input"} onClick={addFields}>
                                          <a className={"btn"}>
                                              <img src={Add}/>
                                              <span> Adicionar Serviço</span>
                                          </a>
                                          Pode adicionar serviços como limpeza ou estacionamento.
                                      </div>
                                  </div>
                              </div>}>
                    </Card>
                </div>
                <div className={"tab-column"}>
                    <Card title={"Detalhes do Arrendamento"} className={"form-container"}
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
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Tipo de Duração
                                  </div>
                                  <div className={"form-input"}>
                                      <div className="custom-switch">
                                          <input type="checkbox" id="switch2" className="switch-input" checked={isSwitchChecked}
                                                 onChange={handleSwitchChange}/>
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
                                      Início da renda
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"date"} value={startDate} onChange={handleStartDateChange}/>
                                  </div>
                              </div>

                              {isSwitchChecked && (
                                  <>
                                      <div className={"form-group"}>
                                          <div className={"form-label"}>
                                              Fim da renda
                                              <span className={"mandatory"}>*</span>
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"date"} value={endDate} onChange={handleEndDateChange}/>
                                          </div>
                                      </div>
                                      <div className={"form-group"}>
                                          <div className={"form-label"}>
                                              Duração da Renda
                                              <span className={"mandatory"}>*</span>
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"text"} value={calculateDuration()} readOnly />
                                          </div>
                                      </div>
                                  </>
                              )}


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
                    </div>}>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default GeneralContent