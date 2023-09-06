import Card from "../../ui/cards/Card.jsx";
import Remove from "../../../assets/icons/icon_remove.svg";
import Add from "../../../assets/icons/icon_plus.svg";
import {useState} from "react";

const GeneralContent = ({onSubmit, propertyValues, residentValues}) => {

    const [fields, setFields] = useState([]);
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('');

    const [data, setData] = useState({
        propertyID: '', residentID: '',
        type: 'Contrato de arrendamento habitacional', id: '', startIncome: '', endIncome: '', renovation: '',
        payment: '', paymentMeans: '', paymentDay: '',

        rent: '', rentIVA: '', charges: '', chargesIVA: '', fullRent: '',
        deposit: '',
        indexType: '', indexValue: '', percentage: '',
        services: [],
    });

    const updateDataWithFields = () => {
        const services = fields.map((field) => ({
            description: field.description,
            amount: field.amount,
            iva: field.iva
        }));

        setData((prevData) => ({
            ...prevData,
            services: services,
        }));
    };

    /*
    const handleInputChange = (field, value) => {
        if (field === 'residentID') {
            // Extract the NIF from the selected option value
            const selectedNIF = value.match(/\(NIF (\d+)\)/);
            if (selectedNIF && selectedNIF.length > 1) {
                const nifValue = selectedNIF[1];
                setData((prevData) => ({
                    ...prevData,
                    [field]: nifValue,
                }));
            }
        } else {
            // For other fields, set the value directly
            setData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        }
    };

     */

    const handleInputChange = (field, value) => {
        if (field === 'residentID') {
            // Extract the NIF and name from the selected option value
            const selectedOption = residentValues.find((resident) => {
                const fullName = `${resident.generalInfo.name} ${resident.generalInfo.surname} (NIF ${resident.generalInfo.NIF})`;
                return fullName === value;
            });

            if (selectedOption) {
                setData((prevData) => ({
                    ...prevData,
                    residentID: selectedOption.generalInfo.NIF,
                    name: selectedOption.generalInfo.name,
                    surname: selectedOption.generalInfo.surname
                }));
            }
        } else {
            // For other fields, set the value directly
            setData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        }
    };


    const calculateDuration = () => {

        if(data.startIncome && data.endIncome) {
            const startDateObj = new Date(data.startIncome.replace(/-/g, '/'));
            const endDateObj = new Date(data.endIncome.replace(/-/g, '/'));

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


    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        onSubmit(data);
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
                                      <select value={data.propertyID}
                                              onChange={(e) => handleInputChange('propertyID', e.target.value)}>
                                          <option value="" disabled>Escolher</option>
                                          {propertyValues.map((property, index) => (
                                              <option key={index}>{property.identifier}</option>
                                          ))}
                                      </select>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Inquilino
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <select value={data.residentID}
                                              onChange={(e) => handleInputChange('residentID', e.target.value)}>
                                          <option value="" disabled>Escolher</option>
                                          {residentValues.map((resident, index) => (
                                              <option key={index}>{resident.generalInfo.name} {resident.generalInfo.surname} (NIF {resident.generalInfo.NIF})</option>
                                          ))}
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
                                      <input type={"number"} placeholder={"Montante"}
                                             value={data.rent}
                                             onChange={(e) => handleInputChange('rent', e.target.value)}
                                      />
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"} placeholder={"IVA"}
                                             value={data.rentIVA}
                                             onChange={(e) => handleInputChange('rentIVA', e.target.value)}/>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      encargos
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"} placeholder={"Montante"}
                                             value={data.charges}
                                             onChange={(e) => handleInputChange('charges', e.target.value)}/>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"} placeholder={"IVA"}
                                             value={data.chargesIVA}
                                             onChange={(e) => handleInputChange('chargesIVA', e.target.value)}/>
                                  </div>
                              </div>

                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Renda incluindo despesas
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"}
                                             value={data.fullRent}
                                             onChange={(e) => handleInputChange('fullRent', e.target.value)}/>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Retenção de IRS
                                  </div>
                                  <div className={"form-input"}>
                                      <select>
                                          <option>Sem impostos</option>
                                      </select>
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
                                      <select value={data.type}
                                              onChange={(e) => handleInputChange('type', e.target.value)}>
                                          <option>Contrato de arrendamento habitacional</option>
                                          <option>Contrato de arrendamento habitacional de curta duração</option>
                                      </select>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Identificador
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"text"} value={data.id}
                                             onChange={(e) => handleInputChange('id', e.target.value)}/>
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
                                      <input type={"date"}
                                             value={data.startIncome}
                                             onChange={(e) => {
                                                 handleInputChange('startIncome', e.target.value);
                                             }}/>
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
                                              <input type={"date"}
                                                     value={data.endIncome}
                                                     onChange={(e) => {
                                                         handleInputChange('endIncome', e.target.value);
                                                     }}/>
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
                                      <select value={data.payment}
                                              onChange={(e) => handleInputChange('payment', e.target.value)}>
                                          <option>Mensal</option>
                                          <option>Anual</option>
                                          <option>Motante Fixo</option>
                                      </select>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}> Metódo de Pagamento</div>
                                  <div className={"form-input"}>
                                      <select value={data.paymentMeans}
                                              onChange={(e) => handleInputChange('paymentMeans', e.target.value)}>
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
                                      <select value={data.paymentDay}
                                              onChange={(e) => handleInputChange('paymentDay', e.target.value)}>
                                          {Array.from({length: 31}, (_, index) => (
                                              <option key={index + 1}>{index + 1}</option>
                                          ))}
                                      </select>
                                  </div>
                              </div>

                          </div>}>
                    </Card>
                </div>
            </div>

            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Serviços Extras"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className="keys-container">
                                  {fields.map((field, index) => (
                                      <div className={"form-group"} key={index}>
                                          <div className={"form-label"}>
                                              Serviço
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"text"} placeholder={"Descrição"}
                                                     value={field.description}
                                                     onChange={(e) => {
                                                         const updatedFields = [...fields];
                                                         updatedFields[index] = {
                                                             ...updatedFields[index],
                                                             description: e.target.value,
                                                         };
                                                         setFields(updatedFields);
                                                         updateDataWithFields()
                                                     }}/>
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"number"} placeholder={"Montante"}
                                                     value={field.amount}
                                                     onChange={(e) => {
                                                         const updatedFields = [...fields];
                                                         updatedFields[index] = {
                                                             ...updatedFields[index],
                                                             amount: e.target.value,
                                                         };
                                                         setFields(updatedFields);
                                                         updateDataWithFields()
                                                     }}/>
                                          </div>
                                          <div className={"form-input"}>
                                              <input type={"number"} placeholder={"IVA"}
                                                     value={field.iva}
                                                     onChange={(e) => {
                                                         const updatedFields = [...fields];
                                                         updatedFields[index] = {
                                                             ...updatedFields[index],
                                                             iva: e.target.value,
                                                         };
                                                         setFields(updatedFields);
                                                         updateDataWithFields()
                                                     }}/>
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
                                                 onChange={() => setSelectedRadio('percentage')}/>
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
                                          <input type={"text"} placeholder={"Tipo de Índice"}
                                                 value={data.indexType}
                                                 onChange={(e) => handleInputChange('indexType', e.target.value)}/>
                                      </div>
                                      <div className={"form-input"}>
                                          <input type={"text"} placeholder={"Valor de Índice"}
                                                 value={data.indexValue}
                                                 onChange={(e) => handleInputChange('indexValue', e.target.value)}/>
                                      </div>
                                  </div>
                              )}

                              {selectedRadio === 'percentage' && (
                                  <div className={"form-group"}>
                                      <div className={"form-label"}>
                                          Percentagem
                                      </div>
                                      <div className={"form-input"}>
                                          <input type={"text"} placeholder={"% Percentagem"}
                                                 value={data.percentage}
                                                 onChange={(e) => handleInputChange('percentage', e.target.value)}/>
                                      </div>
                                  </div>
                              )}
                          </div>}>
                    </Card>
                </div>

                <div className={"tab-column"}>
                    <Card title={"Caução"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Caução
                                      <span className={"mandatory"}>*</span>
                                  </div>
                                  <div className={"form-input"}>
                                      <input type={"number"}
                                             value={data.deposit}
                                             onChange={(e) => handleInputChange('deposit', e.target.value)}/>
                                  </div>
                              </div>
                          </div>}>
                    </Card>
                    <Card title={"Primeiro Recibo"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
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