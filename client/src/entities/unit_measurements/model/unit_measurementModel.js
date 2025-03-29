import { getUnitMeasurements } from "../api/unit_measurementAPI";

export async function handleGetUnit_Measurements () {
    // Пробуем получить список всех категорий
    try {
        console.log("Получение всех единиц измерений...");
        const unit_measurements = await getUnitMeasurements();

        if (unit_measurements) {

        }
        else {
            alert("Не удалось вывести все единицы измерения");
        }
        
        return unit_measurements;
    }
    catch (error) {
        console.error(error);
        alert("Возникла ошибка при выводе всех единиц измерений");
        throw error;
    }
}
