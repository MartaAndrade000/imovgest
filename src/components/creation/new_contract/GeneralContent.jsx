import Card from "../../ui/cards/Card.jsx";
import Remove from "../../../assets/icons/icon_remove.svg";
import Add from "../../../assets/icons/icon_plus.svg";
import {useState} from "react";

const GeneralContent = () => {

    const [fields, setFields] = useState([]);
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('');

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

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30.44); // Average days in a month

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        const remainingDays = Math.round(days % 30.44); // Round the days to a whole number

        if (isNaN(years) || isNaN(remainingMonths) || isNaN(remainingDays)) {
            return '';
        }

        if (years > 0) {
            return `${years} ano${years > 1 ? 's' : ''}, ${remainingMonths} ${remainingMonths !== 1 ? 'meses' : 'mês'} e ${remainingDays} dia${remainingDays !== 1 ? 's' : ''}`;
        } else if (remainingMonths > 0) {
            return `${remainingMonths} ${remainingMonths !== 1 ? 'meses' : 'mês'} e ${remainingDays} dia${remainingDays !== 1 ? 's' : ''}`;
        } else {
            return `${remainingDays} dia${remainingDays !== 1 ? 's' : ''}`;
        }
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
                          content={<div className={"form-wrapper1"}>
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
                    <Card title={"Revisão de Renda"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Revisão de Renda de acordo com
                                  </div>
                                  <div className={"form-input"}>
                                      <label className={'radio-label'}>
                                          <input type="radio"
                                                 name="rent-revision"
                                                 value="reference"
                                                 onChange={() => setSelectedRadio('reference')}/>
                                          Um índice de referência de renda
                                      </label>
                                      <label className={'radio-label'}>
                                          <input type="radio"
                                                 name="rent-revision"
                                                 value="percentage"
                                                 onChange={() => setSelectedRadio('percentage')} />
                                          Uma percentagem acordada para cima
                                      </label>
                                  </div>
                              </div>

                              {selectedRadio === 'reference' && (
                                  <div className={"form-group"}>
                                      <div className={"form-label"}>
                                          índice de referência
                                      </div>
                                      <div className={"form-input"}>
                                          <input type={"text"} placeholder={"Tipo de Índice"}/>
                                      </div>
                                      <div className={"form-input"}>
                                          <input type={"text"} placeholder={"Valor de Índice"}/>
                                      </div>
                                  </div>
                              )}

                              {selectedRadio === 'percentage' && (
                                  <div className={"form-group"}>
                                      <div className={"form-label"}>
                                          Percentagem
                                      </div>
                                      <div className={"form-input"}>
                                          <input type={"text"} placeholder={"% Percentagem"}/>
                                      </div>
                                  </div>
                              )}
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
                                          <input type="checkbox" id="switch1" className="switch-input"
                                                 checked={isSwitchChecked}
                                                 onChange={handleSwitchChange}/>
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
                                              <input type={"text"} value={calculateDuration()} readOnly/>
                                          </div>
                                      </div>
                                  </>
                              )}

                              <div className={"form-group"}>
                                  <div className={"form-label"}> Renovação</div>
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
                                  <div className={"form-label"}> Pagamento</div>
                                  <div className={"form-input"}>
                                      <select>
                                          <option>Mensal</option>
                                          <option>Anual</option>
                                          <option>Motante Fixo</option>
                                      </select>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}> Metódo de Pagamento</div>
                                  <div className={"form-input"}>
                                      <select>
                                          <option>Cartão de Crédito</option>
                                          <option>Cheque</option>
                                          <option>Débito Direto</option>
                                          <option>Dinheiro</option>
                                          <option>Transferência Bancária</option>
                                      </select>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}> Dia de Pagamento</div>
                                  <div className={"form-input"}>
                                      <select>
                                          {Array.from({length: 31}, (_, index) => (
                                              <option key={index + 1}>{index + 1}</option>
                                          ))}
                                      </select>
                                  </div>
                              </div>

                          </div>}>
                    </Card>
                    <Card title={"Caução"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Caução
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"}/>
                                  </div>
                              </div>
                          </div>}>
                    </Card>
                    <Card title={"Primeiro Recibo"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>

                            <div className={"form-group"}>
                                <div className={"form-label"}></div>
                                <div className={"form-input"}>
                                    <div className={"check-box"}>
                                        <input type={"checkbox"}/>
                                        <label> Selecione a opção em caso da primeira renda ser pro rata.</label>
                                    </div>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Data fim de período
                                </div>
                                <div className={"form-input"}>
                                    <input type={"date"}/>
                                    Data de fim do período para o primeiro pagamento.
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Renda excluindo Encargos
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Encargos
                                </div>
                                <div className={"form-input"}>
                                    <input type={"number"}/>
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