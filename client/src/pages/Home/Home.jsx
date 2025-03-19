// Главная страница

import Header from "../../widgets/header/header";
import "../Home/Home.module.css";

function Home() {
    return (
        <>
        <Header></Header>
        <h2 className="welcome">Добро пожаловать в Cupfi!</h2>
        </>
    )
}
export default Home;