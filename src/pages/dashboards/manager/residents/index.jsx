import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../../firebase.js";
import Page from "../../../../components/ui/Page.jsx";
import NewResident from "../../../../components/new_resident/NewResident.jsx";

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Page selected={"couve"}>
            <NewResident/>
        </Page>

    )
}

export default index;