import Page from "../../../components/ui/Page.jsx";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logout} from "../../../firebase.js";
import Office from "../../../components/Office.jsx";
import Property from "../../../components/detail/Property.jsx";

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Page selected={"office"}>
            {/*<Office/>*/}
            <Property/>
        </Page>

    )
}

export default index;