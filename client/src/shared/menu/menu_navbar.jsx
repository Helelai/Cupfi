// Навигация на странице меню
import style from "./menu_navbar.module.css"
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
