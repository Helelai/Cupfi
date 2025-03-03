// Здесь будет работа непосредственно с самими категориями, а не взаимодействие с сервером

// Импортируем функции запросов
import { createCategory, getCategories } from "../api/categoryAPI.js";


export async function handleCreateCategory () {
    const categoryNameInput = document.getElementById("categoryName");
    const categoryName = categoryNameInput.value.trim();

    // Проверка
    if (!categoryName) {
        alert("Введите название категории")
        return; // Возвращаемся, чтобы функция не продолжалась дальше
    }

    try {
        const newCategory = await createCategory(categoryName);

        // Если сервер вернул категорию
        if (newCategory) {
            alert("Категория успешно создана")
        }
        else {
            alert("Не удалось создать категорию")
        }
    }
    catch(error) {
        console.error(error);
        alert("Возникла ошибка при создании категории")
        throw error;
    }

}

export async function handleGetCategories () {
    // Пробуем получить список всех категорий
    try {
        console.log("Получение всех категорий...");
        const categories = await getCategories();

        if (categories) {

        }
        else {
            alert("Не удалось вывести все категории");
        }
        
        return categories;
    }
    catch (error) {
        console.error(error);
        alert("Возникла ошибка при выводе всех категорий");
        throw error;
    }
}
