import {API_URL} from "../../../../config"

export async function getUsers() {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: "GET"
        })

        if (!response.ok) {
            throw new Error("Ошибка отправки запроса");
        }

        return await response.json();
    }
    catch(error) {
        console.error("Error: ", error)
        throw error;
    }   
}

export async function updateTariff(surname, name, patronymic, email, phone_number, username, password) {
    try {
        const response = await fetch(`${API_URL}/tariff/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify({surname, name, patronymic, email, phone_number, username, password}),
        });

        if (!response.ok) {
            throw new Error("Ошибка отправки запроса");
        }

        return await response.json();
    }
    catch(error) {
        console.error("Error: ", error)
        throw error;
    }
}