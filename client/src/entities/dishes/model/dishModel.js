import { createDish, getDishes } from "../api/dishAPI";

export async function handleCreateDish(dishNameInput, priceInput, category_idInput) {

    const dishName = dishNameInput.value.trim();
    const price = +priceInput.value;
    const category_id = +category_idInput.value;

    if (!dishName || !price || !category_id) {
        alert("Введите название блюда");
        return;
    }
    else {

        try {
            const newDish = await createDish(dishName, price, category_id);

            if (newDish) {
                alert("Блюдо успешно создано")
            }
            else {
                alert("Не удалось создать блюдо")
            }
        }
        catch (error) {
            console.error(error);
            alert("Возникла ошибка при создании категории")
            throw error;
        }

    }
}

export async function handleGetDishes(selectedCategory) {
    
    try {
        let dishes = []
        if(selectedCategory) {
            dishes = await getDishes(selectedCategory);
        }
        else {
            dishes = await getDishes();
        }


        if (!dishes) {
            console.log("Не удалось получить все блюда");
        }

        return dishes;
    }
    catch(error) {
        console.error(error);
        throw error;
    }
}



