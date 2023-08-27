import "../scss/login.scss";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import React, {useState} from "react";

const temp = () => {
    let [active, setActive] = useState(true);

    let activate = () => {
        console.log(active)
        setActive(false);
    }

    return (
        <div className={"wrapper"}>
            <div className={"parent"}>
                <div className={"form"}>
                    <LoginForm/>
                </div>
                <div className={"form"}>
                    <RegisterForm/>
                </div>

                <div className={"hover " + (active ? "active" : "")}>
                    <div className={"message"}>
                        <p className={"title"}>Already a user?</p>
                        <p className={"messageText"}>
                            To keep connected with us please login with your personal information.
                        </p>
                        <button className={"button"} onClick={() => setActive(true)}>Sign In</button>
                    </div>

                    <div className={"message"}>
                        <p className={"title"}>New to Imovegest?</p>
                        <p className={"messageText"}>
                            Enter your personal details and start a journey with us.
                        </p>
                        <button className={"button light"} onClick={() => setActive(false)}>Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default temp;