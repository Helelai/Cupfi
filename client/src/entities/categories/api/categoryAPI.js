// адрес для работы с категориями
const API_URL = "http://localhost:8081/api";

// Здесь мы записываем функции получения и отправки запросов

export async function createCategory (name) {
    try {
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
        });

        // Выбрасываем ошибку, если ответ сервера не 200
        if (!response.ok) {
            throw new Error("Ошибка отправки запроса");
        }

        // Возвращаем ответ
        return await response.json();

    } 
    catch(error) {
        console.error("Error: ", error)
        throw error;
    }
}

export async function getCategories() {
    try {
        const response = await fetch(`${API_URL}/dish_category`, {
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

