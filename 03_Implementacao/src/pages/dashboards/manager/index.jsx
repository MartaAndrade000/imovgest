import Page from "../../../components/ui/Page.jsx";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logout} from "../../../firebase.js";
import Office from "../../../components/Office.jsx";
import Property from "../../../components/detail/detail_resident/Resident.jsx";

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Page selected={"office"}>
            <Office/>
        </Page>

    )
}

export default index;