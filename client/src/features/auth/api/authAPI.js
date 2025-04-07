import { API_URL } from "../../../../config";
import { saveToken } from "../model/authService";


export async function registration(surname, name, patronymic, email, phone_number, username, password) {
    const role_id = 1;
    try {
        const response = await fetch(`${API_URL}/auth/registration`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({surname, name, patronymic, email, phone_number, role_id, username, password})
        }).catch((error) => {
            return error;
        })

        /*const data = await response.json();
        console.log("Токен:" + data.token);
        saveToken(data.token);*/

       
        return await response.json();
    }
    catch (e) {
        console.log("Ошибка API регистрации: ", e);
        throw e;
    }
}

export async function login(username, password) {

    try {
        console.log("login: " + username + " " + password);
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({username, password})
        })

        if (!response.ok) {
            throw new Error("Ошибка отправки запроса");
        }

        const data = await response.json();
        console.log("Токен:" + data.token);
        saveToken(data.token);
        
        return await data;
    }
    catch (e) {
        console.log("Ошибка API авторизации: ", e);
        throw e;
    }
}

