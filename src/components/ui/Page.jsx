import Navbar from "./Navbar.jsx";
// import {useAuthState} from "react-firebase-hooks/auth";
// import {auth, logout} from "../../firebase.js";
import Topbar from "./Topbar.jsx";

const Page = ({children, selected}) => {

    return (
        <div style={{display: "flex", width: "100%", height: "100%"}}>
            <div style={{width: 225, height: "100%", flexShrink: 0}}><Navbar selected={selected}/></div>
            <div style={{display: "flex", flexGrow: 1, flexDirection: "column"}}>
                <div style={{display: "flex"}}>
                    <Topbar/>
                </div>
                <div style={{display: "flex", flexGrow: 1, overflow: "hidden"}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Page;
