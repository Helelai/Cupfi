// адрес для работы с категориями
const API_URL = "http://localhost:8081/api";

export async function createTariff(name, cost_per_hour, description, max_reservation_time) {
    try {
        const response = await fetch(`${API_URL}/tariff`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify({name, cost_per_hour, description, max_reservation_time}),
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
export async function updateTariff(id, name, cost_per_hour, description, max_reservation_time) {
    try {
        const response = await fetch(`${API_URL}/tariff/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify({name, cost_per_hour, description, max_reservation_time}),
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

export async function getTariffs() {
    try {
        const response = await fetch(`${API_URL}/tariff`, {
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

