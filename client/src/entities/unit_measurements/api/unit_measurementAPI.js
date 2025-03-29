// адрес для работы с категориями
const API_URL = "http://localhost:8081/api";

export async function getUnitMeasurements() {
    try {
        const response = await fetch(`${API_URL}/unit_measurement`, {
            method: "GET",
        })

        if (!response.ok) {
            throw new Error("Ошибка отправки запроса")
        }

        return await response.json();
    }
    catch(error) {
        console.error(error);
        throw error;
    }
}

