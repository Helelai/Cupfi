import { useEffect, useState } from "react";
import { getDishes } from "../api/dishAPI";
import MenuCard from "../../../widgets/menu_card/menu_card";
import { handleGetDishes } from "../model/dishModel";

function DishList({selectedCategory}) {
    const [dishes, setDishes] = useState([]);

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
        fetchDishes();
    }, [selectedCategory]);

    return (
        <div className="cardsContainer">
            {dishes.map((dish) => (<MenuCard key={dish.id} name={dish.name} description={dish.description} price={dish.price} imageUrl={`${dish.name}.png`} category={dish.category_id}/>))}
        </div>
    )
}

export default DishList;