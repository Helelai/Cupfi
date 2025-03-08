import { Tab, TabList, TabProvider } from "@gravity-ui/uikit";

import style from "./menu_navbar.module.css"
import { useState } from "react";
function Menu_Navbar() {

    const [activeTab, setActiveTab] = useState("first");

    return (
        <>
            <div className={style.navbar} >
                <h1 className={style.title}>Наше меню</h1>
                <div className={style.categories}>
                    <TabProvider value={activeTab} onUpdate={setActiveTab}>
                        <TabList>
                            <Tab value="first" className={style.category}>Все</Tab>
                            <Tab value="second" className={style.category}>Напитки</Tab>
                            <Tab value="third" className={style.category}>Закуски</Tab>
                        </TabList>
                    </TabProvider>
                </div>
            </div>

        </>
    )
}

export default Menu_Navbar;