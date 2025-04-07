//Хук для получения роли пользователя из токена
import {useState, useEffect} from "react";
import { API_URL } from "../../../../config";

export function useAuth() {
    const [role, setRole] = useState("guest");

    //Проверяем авторизован ли пользователь
    useEffect(() => {
        async function checkAuth() {
            //Берем токен 
            const token = localStorage.getItem("token");

            //Если его нет - у пользователя нет роли (гость)
            if (!token) {
                setRole("guest");
                return;
            }

            //Если есть - ищем его роль
            const response = await fetch(`${API_URL}/auth/check-auth`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).catch((error) => {
                console.log("Возникла ошибка при проверке токена.");
                return null;
            })

            if (!response.ok) {
                console.log("Возникла ошибка при проверке токена.");
                return null;
            }

            const data = await response.json();
            console.log("Ответ сервера:", data);
            console.log(data.user.role);
            setRole(data.user.role);
        }

        checkAuth();
    }, [])

    return role;
}
