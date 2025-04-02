import {API_URL} from "../../../../config"
// Здесь мы записываем функции получения и отправки запросов

export async function createCategory (name) {
    // пробуем отправить запрос
    const response = await fetch(`${API_URL}/dish_category`, {
        //передаем метод
        method: "POST",
        //заголовок
        headers: {
            "Content-type": "application/json",
        },
        // и тело запроса
        body: JSON.stringify({name}),
    }).catch((error) => {
        console.error("Error: ", error)
        return null;
    });

    // Выбрасываем ошибку, если ответ сервера не 200
    if (!response.ok) {
        throw new Error("Ошибка отправки запроса");
    }

    // Возвращаем ответ
    return await response.json();

}

export async function getCategories() {
    const response = await fetch(`${API_URL}/dish_category`, {
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

