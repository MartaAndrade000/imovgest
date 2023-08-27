import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logout} from "../../firebase.js";
import Icon from "../../assets/icons/icon_profile.svg";
import "./topbar.scss";
import {useNavigate} from "react-router-dom";

const Topbar = () => {
    let [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate();
    return (
        <div className={"topbar"}>
            <div> Hello {!loading && user?.displayName}</div>
            <div className={"dropdown"}>
                <img src={Icon}></img>
                <div className={"dropdown-content"}>
                    <div className={"profile-name"}>
                        <p className={"name"}> {!loading && user?.displayName}</p>
                        <p className={"email"}> {!loading && user?.email}</p>
                    </div>
                    <div className={"profile-options"}>
                        <a href="#">My Profile</a>
                        <button onClick={async () => {
                            await logout();
                            navigate("/");
                        }}>Logout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Topbar;
