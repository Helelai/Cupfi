import "../../app/styles/style.css"
import { AuthorizationBlock } from "../../features/auth/ui/authorization/AuthorizationBlock";
import { useAuth } from "../../features/auth/model/useAuth";
import { PersonalAccount } from "../../widgets/PersonalAccount/PersonalAccount";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Account() {
    const role = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div className="pageCont">
                {(role === "user" || role === "admin") && <PersonalAccount></PersonalAccount>}
                {role === "guest" && navigate("/login")}
            </div>
        </>
    )
}

export default Account;