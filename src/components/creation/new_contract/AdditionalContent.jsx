import Card from "../../ui/cards/Card.jsx";
import Remove from "../../../assets/icons/icon_remove.svg";
import Add from "../../../assets/icons/icon_plus.svg";
import {useState} from "react";

const AdditionalContent = ({onSubmit}) => {

    const [data, setData] = useState({
        specialConditions: '',
        clauses: '',
        comments: ''
    });

    const handleInputChange = (field, value) => {
        // For other fields, set the value directly
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        //onSubmit(data);
    };


    return (
        <>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Condições"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Condições Especiais
                                  </div>
                                  <div className={"form-input"}>
                                  <textarea
                                      placeholder={"Exemplo: Na existência de animais domésticos será exigido uma caução adicional..."}
                                      value={data.specialConditions}
                                      onChange={(e) => handleInputChange('specialConditions', e.target.value)}/>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Cláusulas Específicas
                                  </div>
                                  <div className={"form-input"}>
                                  <textarea
                                      placeholder={"Exemplo: O inquilino é responsável por manter as instalações alugadas em boas condições..."}
                                      value={data.clauses}
                                      onChange={(e) => handleInputChange('clauses', e.target.value)}/>
                                  </div>
                              </div>
                          </div>}>
                    </Card>
                </div>
                <div className={"tab-column"}>
                    <Card title={"Comentários"} className={"form-container"}
                          content={<div className={"form-wrapper1"}>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Comentários
                                  </div>
                                  <div className={"form-input"}>
                                      <textarea
                                          placeholder={"Exemplo: 2 conjuntos de chaves dadas... "}
                                          value={data.comments}
                                          onChange={(e) => handleInputChange('comments', e.target.value)}/>
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

export default AdditionalContent