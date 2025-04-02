// Страница с меню

import "../../app/styles/style.css";
import "../../shared/menu_card/menu_card.module.css"
import { Button } from "@gravity-ui/uikit";
import Menu_Navbar from "../../shared/menu/menu_navbar";
import MenuCard from "../../shared/menu_card/menu_card";
import { useState } from "react";
import { handleCreateDish } from "../../entities/dishes/model/dishModel";
import DishList from "../../entities/dishes/ui/dishList";

function Menu() {
    const [selectedCategory, setSelectedCategory] = useState({id: "all", name: "Все"});


    return (
        <>
            <div className="pageCont">
            <Menu_Navbar onCategoryChange={(category) => {
                setSelectedCategory(category); 
            }}></Menu_Navbar>
            <DishList selectedCategory={selectedCategory}></DishList>
            </div>

        </>
    )
}

export default Menu;