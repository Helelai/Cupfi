// Навигация на странице меню

import { Tab, TabList, TabProvider, Button } from "@gravity-ui/uikit";
import { handleCreateCategory, handleGetCategories } from "../../entities/categories/model/categoryModel";

import style from "./menu_navbar.module.css"
import { useEffect, useState } from "react";
import CategoryList from "../../entities/categories/ui/categoryLIst";
function Menu_Navbar({onCategoryChange}) {

    return (
        <>
            <div className={style.navbar} >
                <h1 className={style.title}>Наше меню</h1>
                    <CategoryList onCategoryChange={onCategoryChange}></CategoryList>
            </div>

        </>
    )
}

export default Menu_Navbar;
