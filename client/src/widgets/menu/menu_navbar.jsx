// Навигация на странице меню

import { Tab, TabList, TabProvider, Button } from "@gravity-ui/uikit";
import { handleCreateCategory, handleGetCategories } from "../../features/categories/model/categoryModel";

import style from "./menu_navbar.module.css"
import { useEffect, useState } from "react";
function Menu_Navbar() {

    const [activeTab, setActiveTab] = useState("first");
    const [categories, setCategories] = useState([]); // Начальное значение - пустой массив, чтобы получить значения категорий из fetch запроса
    const [activeCategory, setActiveCategory] = useState("Все"); // Начальное значение - пустой массив, чтобы получить значения категорий из fetch запроса

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
            <div className={style.navbar} >
                <h1 className={style.title}>Наше меню</h1>

                <div className={style.categoriesTabs}>
                    {categories.map((category) => <span onClick={() => setActiveCategory(category.name)} 
                    className={category.name == activeCategory ? style.activeCategory : style.category} 
                    key={category.id}>{category.name}</span>)}
                </div>

            </div>

        </>
    )
}

/*
                    <TabProvider value={activeTab} onUpdate={setActiveTab}>
                        <TabList>
                            <Tab value="first" className={style.category}>Все</Tab>
                            <Tab value="second" className={style.category}>Напитки</Tab>
                            <Tab value="third" className={style.category}>Закуски</Tab>
                        </TabList>
                    </TabProvider>
*/
export default Menu_Navbar;
