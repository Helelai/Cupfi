import {API_URL} from "../../../../config"

export async function getUnitMeasurements() {
    const response = await fetch(`${API_URL}/unit_measurement`, {
        method: "GET",
    }).catch((error) => {
        console.error(error);
        return null;
    })

    if (!response.ok) {
        throw new Error("Ошибка отправки запроса")
    }

    return await response.json();
}

