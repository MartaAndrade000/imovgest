import Card from "../../ui/cards/Card.jsx";

import "../creation.scss"


const AdditionalContent = () => {

    return(
        <>
            <div className={"tab-row"}>
                <div className={"tab-column"}>
                    <Card title={"Informações Bancárias"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Banco
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    País
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    IBAN
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    SWIFT/BIC
                                </div>
                                <div className={"form-input"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                        </div>
                    }></Card>
                </div>

                <div className={"tab-column"}>
                    <Card title={"Informações Adicionais"} className={"form-container"} content={
                        <div className={"form-wrapper1"}>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Nova Morada
                                </div>
                                <div className={"form-input"}>
                                    <textarea className={"additional"}/>
                                    Nova morada do inquilino para futura correspondência.
                                </div>
                            </div>
                            <div className={"form-group"}>
                                <div className={"form-label"}>
                                    Notas Privadas
                                </div>
                                <div className={"form-input"}>
                                    <textarea className={"additional"} placeholder={"Exemplo: Inquilino estável e organizado..."}/>
                                </div>
                            </div>
                        </div>

                    }></Card>
                </div>
            </div>
        </>
    );

}

export default AdditionalContent