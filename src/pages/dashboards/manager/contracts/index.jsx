import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../../firebase.js";
import Page from "../../../../components/ui/Page.jsx";
import NewContract from "../../../../components/creation/new_contract/NewContract.jsx";

const index = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Page selected={"contracts"}>
            <NewContract/>
        </Page>

    )
}

export default index;