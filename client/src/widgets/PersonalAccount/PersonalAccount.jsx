import { removeToken } from "../../features/auth/model/authService";
import CustomSmallButton from "../../shared/CustomSmallButton/CustomSmallButton";

export function PersonalAccount() {
    return (
        <>
            <h2>Профиль</h2>
            <CustomSmallButton onClick={() => {
                removeToken();
                window.location.reload();
            }}>Выйти</CustomSmallButton>
        </>
    )
}