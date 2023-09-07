import {auth} from "../../../../../firebase.js"
import {useAuthState} from "react-firebase-hooks/auth";

import NewResident from "../../../../../components/creation/new_resident/NewResident.jsx";
import Page from "../../../../../components/ui/Page.jsx";


const index = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Page selected={"residents"}>
            <NewResident/>
        </Page>

    )
}

export default index;
