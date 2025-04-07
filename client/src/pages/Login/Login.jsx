import { AuthorizationBlock } from "../../features/auth/ui/authorization/AuthorizationBlock";
import "../../app/styles/style.css"

export function Login() {
    return (
        <>
        <div className="pageCont">
            <AuthorizationBlock></AuthorizationBlock>
        </div>
        </>
    ) 
}