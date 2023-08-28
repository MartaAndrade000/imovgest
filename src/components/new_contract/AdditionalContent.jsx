import Card from "../ui/cards/Card.jsx";
import Remove from "../../assets/icons/icon_remove.svg";
import Add from "../../assets/icons/icon_plus.svg";

const AdditionalContent = () => {
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
                                      placeholder={"Exemplo: Na existência de animais domésticos será exigido uma caução adicional..."}/>
                                  </div>
                              </div>
                              <div className={"form-group"}>
                                  <div className={"form-label"}>
                                      Cláusulas Específicas
                                  </div>
                                  <div className={"form-input"}>
                                  <textarea
                                      placeholder={"Exemplo: O inquilino é responsável por manter as instalações alugadas em boas condições..."}/>
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
                                      <textarea placeholder={"Exemplo: 2 conjuntos de chaves dadas... "}/>
                                  </div>
                              </div>
                          </div>}>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default AdditionalContent