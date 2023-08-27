import Page from "../../../components/ui/Page.jsx";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logout} from "../../../firebase.js";
//import Office2 from "../../../components/Office2.jsx";
import Office from "../../../components/Office.jsx";

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Page selected={"couve"}>
            <Office/>
        </Page>

    )
}

export default index;