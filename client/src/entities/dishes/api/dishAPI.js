// адрес для работы с категориями
const API_URL = "http://localhost:8081/api";

// Здесь мы записываем функции получения и отправки запросов

export async function createDish (name, price, category_id) {
    try {
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

export async function getDishes(selectedCategory) {
    try {
        const url = selectedCategory ? `${API_URL}/dish?category=${selectedCategory}` : `${API_URL}/dish`;

        const response = await fetch(url, {
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

