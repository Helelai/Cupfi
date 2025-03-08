import { Link } from 'react-router-dom';

import styles from "./headNavBar.module.css";

function HeadNavBar() {
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                ЛОГОТИП
            </div>
            <nav className={styles.navlist}>
                <Link to="/" className={styles.links}>Главная</Link>
                <Link href='#' className={styles.links}>Тарифы</Link>
                <Link to="/menu" className={styles.links}>Меню</Link>
                <Link href='#' className={styles.links}>Контакты</Link>
                <Link href='#' className={styles.links}>Личный кабинет</Link>
            </nav>
        </div>

        </>
    )
}

export default HeadNavBar;