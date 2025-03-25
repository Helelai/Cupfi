// Главная страница

import Header from "../../widgets/header/header";
import WelcomeBlock from "../../widgets/welcome_block/welcome_block";
import styles from "../Home/Home.module.css";
import GradientBlock from "../../widgets/gradient_block/gradient_block";
import ReservationBlock from "../../widgets/reservation_block/reservation_block";
import { Button } from "@gravity-ui/uikit";
import { useState } from "react";
import DishList from "../../entities/dishes/ui/dishList";
import "../../app/styles/style.css";
import CustomBigButton from "../../widgets/CustomBigButton/CustomBigButton";
import CustomSmallButton from "../../widgets/CustomSmallButton/CustomSmallButton";
import {useNavigate} from "react-router-dom";

function Home() {
    const [selectedCategory, setSelectedCategory] = useState({id: "all", name: "Все"});

    const navigate = useNavigate();
    return (
        <>
        <Header></Header>

        <div className="pageCont">
            <h2>Добро пожаловать в Cupfi!</h2>
            <WelcomeBlock></WelcomeBlock>
            
            <h2>Почему выбирают нас?</h2>

            <div className={styles.gradientBlockContainer}>
                <div className={styles.advantages}>
                    <GradientBlock title="Современные игровые и рабочие зоны" text="Мощные компьютеры, удобные кресла и быстрый интернет — всё для комфортной работы и увлекательных игр."></GradientBlock>
                    <GradientBlock title="Онлайн-бронирование" text="Забронируйте место заранее, чтобы быть уверенным в комфорте и спокойно наслаждаться атмосферой без лишних забот."></GradientBlock>
                    <GradientBlock title="Закуски и напитки" text="Вкусные закуски, бодрящий кофе и сладкие десерты — всё для того, чтобы вы могли поддерживать энергию."></GradientBlock>
                    <GradientBlock title="Уют и комфорт" text="Уютная атмосфера, где каждая деталь продумана для вашего комфорта. Здесь время пролетает незаметно, и так и хочется задержаться подольше."></GradientBlock>
                </div>
            </div>

            <h2>Онлайн-бронирование</h2>
            <ReservationBlock></ReservationBlock>

            <h2>Закуски и напитки</h2>
            <DishList selectedCategory={selectedCategory}></DishList>
            <CustomSmallButton className={styles["go-to-menu-button"]} onClick={() => navigate("/menu")}>Перейти к меню</CustomSmallButton>

            <h3>У вас еще остались вопросы?</h3>
            <h4>Свяжитесь с нами</h4>
            <div className={styles["contact-with-us"]}>
                <p>Адрес:  Россия, г. Санкт-Петербург, Дачная ул., д. 5 кв.153</p>
                <p>Телефон: +7(995) 443-56-86</p>
                <p>E-mail: cupfi@inbox.ru</p>
            </div>
        </div>

        </>
    )
}
export default Home;