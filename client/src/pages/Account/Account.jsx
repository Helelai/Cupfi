import { RegistrationBlock } from "../../features/auth/ui/registration/registrationBlock";
import registrationStyles from "../Account/Registration.module.css"
import "../../app/styles/style.css"

function Account() {
    

    return (
        <>
            <div className="pageCont">
                <RegistrationBlock></RegistrationBlock>
            </div>
        </>
    )
}

export default Account;