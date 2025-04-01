// адрес для работы с регистрацией/авторизацией
const API_URL = "http://localhost:8081/api/auth/";

export async function registration({surname, name, patronymic, email, phone_number, username, password}) {
    try {
        const response = await fetch(`${API_URL}/registration`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({surname, name, patronymic, email, phone_number, username, password})
        })

        if (!response.ok) {
            throw new Error("Ошибка отправки запроса");
        }
        return await response.json();
    }
    catch (e) {
        console.log("Ошибка API регистрации: ", e);
        throw e;
    }
}

export async function login({username, password}) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({username, password})
        })

        if (!response.ok) {
            throw new Error("Ошибка отправки запроса");
        }
        return await response.json();
    }
    catch (e) {
        console.log("Ошибка API авторизации: ", e);
        throw e;
    }
}

