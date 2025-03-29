import { use, useEffect, useState } from "react";
import { getDishes } from "../api/dishAPI";
import styles from "../../../widgets/menu_card/menu_card.module.css"
import MenuCard from "../../../widgets/menu_card/menu_card";
import { handleGetDishes } from "../model/dishModel";
import { handleGetUnit_Measurements } from "../../unit_measurements/model/unit_measurementModel";

function DishList({selectedCategory}) {
    const [dishes, setDishes] = useState([]);
    const [unit_measurements, setUnitMeasurements] = useState([]);

    useEffect(() => {
        async function fetchDishes() {
            try {
                let data = [];
                if (selectedCategory.id == "all") {
                    data = await handleGetDishes(); 
                }
                else {
                    data = await handleGetDishes(selectedCategory.id); 
                }

                setDishes(data);
            }
            catch (error) {
                console.error("Ошибка загрузки блюд", error);
            }
        }

        async function fetchUnitMeasurements() {
            try {
                let data = await handleGetUnit_Measurements();
                setUnitMeasurements(data);
            }
            catch (error) {
                console.error("Ошибка загрузки единиц измерений", error);
            }
        }
        fetchUnitMeasurements();
        fetchDishes();
    }, [selectedCategory]);

    return (
        <div className={styles.cardsContainer}>
            {dishes.map((dish) => {
                if (dish.dish_status_id == 1) {
                    // переводим код в наименование единицы измерения
                    const unitName = unit_measurements.find((unit) => unit.id === dish.unit_measurement_id)?.name || "неизвестно";
                    return <MenuCard key={dish.id} name={dish.name} description={dish.description} price={dish.price} imageUrl={`${dish.name}.png`} weight={dish.weight} unit_measurement={unitName}/>
                }
                return null;
            })}
        </div>
    )
}

export default DishList;