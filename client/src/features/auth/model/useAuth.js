//Хук для получения роли пользователя из токена
import {useState, useEffect} from "react";

export function useAuth() {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = JSON.parse(atob(token.split(".")[1])); //разбиваем закодированный токен и получаем payload, декодируем и парсим из json
            setRole(decodedToken.role);
        }
    }, [])

    return role;
}
