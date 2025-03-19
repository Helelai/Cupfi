import { useEffect, useState } from "react";
import "./categoryList.modules.css";
import { handleGetCategories } from "../model/categoryModel";

function CategoryList({onCategoryChange}) {

    const [categories, setCategories] = useState([]); // Начальное значение - пустой массив, чтобы получить значения категорий из fetch запроса
    const [activeCategory, setActiveCategory] = useState({id: "all", name: "Все"}); // Начальное значение - пустой массив, чтобы получить значения категорий из fetch запроса

    useEffect(() => {
        // Делаем асинхронную функцию, чтобы получить список всех категорий
        async function fetchCategories() {
            try {
                const data = await handleGetCategories();
                const allCategories = [{id: "all", name:"Все"}, ...data]; 
                setCategories(allCategories);
            }
            catch {
                console.log("Ошибка");
            }
        }

        fetchCategories(); // Инициализируем нашим методов список при запуске
    }, [])
    return (
        <>
        <div>
            {categories.map((category) => <span onClick={() => {
                setActiveCategory(category);
                onCategoryChange(category);
            }}
            className={category.id == activeCategory.id ? "activeCategory" : "category"} 
            key={category.id}>{category.name}</span>)}
        </div>
        </>
    )
}

export default CategoryList;