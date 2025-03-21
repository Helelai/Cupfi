import { Link } from 'react-router-dom';

import styles from "./headNavBar.module.css";

function HeadNavBar() {
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                Cupfi
            </div>
            <nav className={styles.navlist}>
                <Link to="/" className={styles.links}>Главная</Link>
                <Link to='/tariffs' className={styles.links}>Тарифы</Link>
                <Link to='/reservation' className={styles.links}>Забронировать</Link>
                <Link to="/menu" className={styles.links}>Меню</Link>
                <Link to="/reviews" className={styles.links}>Отзывы</Link>
                <Link to='/contacts' className={styles.links}>Контакты</Link>
                <Link to='/account' className={styles.links}>Личный кабинет</Link>
            </nav>
        </div>

        </>
    )
}

export default HeadNavBar;