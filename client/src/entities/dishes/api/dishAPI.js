import {API_URL} from "../../../../config"

// Здесь мы записываем функции получения и отправки запросов

export async function createDish (name, price, category_id) {

    // пробуем отправить запрос
    const response = await fetch(`${API_URL}/dish`, {
        //передаем метод
        method: "POST",
        //заголовок
        headers: {
            "Content-type": "application/json",
        },
        // и тело запроса
        body: JSON.stringify({name, price, category_id}),
    }).catch((error) => {
        console.error("Error: ", error)
        return null;
    })

    // Выбрасываем ошибку, если ответ сервера не 200
    if (!response.ok) {
        throw new Error("Ошибка отправки запроса");
    }

    // Возвращаем ответ
    return await response.json();
}

export async function getDishes(selectedCategory) {

    const url = selectedCategory ? `${API_URL}/dish?category=${selectedCategory}` : `${API_URL}/dish`;

    const response = await fetch(url, {
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

