import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../../firebase.js";
import Page from "../../../../components/ui/Page.jsx";
import NewProperty from "../../../../components/new_property/NewProperty.jsx";

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Page selected={"couve"}>
            <NewProperty/>
        </Page>

    )
}

export default index;