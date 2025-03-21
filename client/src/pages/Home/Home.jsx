// Главная страница

import Header from "../../widgets/header/header";
import WelcomeBlock from "../../widgets/welcome_block/welcome_block";
import styles from "../Home/Home.module.css";
import GradientBlock from "../../widgets/gradient_block/gradient_block";
import ReservationBlock from "../../widgets/reservation_block/reservation_block";

function Home() {
    return (
        <>
        <Header></Header>

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
        </>
    )
}
export default Home;