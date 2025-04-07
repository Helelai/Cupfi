import { Link } from 'react-router-dom';

import styles from "./headNavBar.module.css";
import { useAuth } from '../../features/auth/model/useAuth';

function HeadNavBar() {
    const role = useAuth();
    let mainLink = role === "admin" ? "/admin" : "/";

    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to={mainLink} className={styles["main-link"]}>Cupfi</Link>
            </div>
            <nav className={styles.navlist}>
                {role === "guest" && (
                    <>
                        <Link to="/" className={styles.links}>Главная</Link>
                        <Link to='/tariffs' className={styles.links}>Тарифы</Link>
                        <Link to='/reservation' className={styles.links}>Забронировать</Link>
                        <Link to="/menu" className={styles.links}>Меню</Link>
                        <Link to="/reviews" className={styles.links}>Отзывы</Link>
                        <Link to='/contacts' className={styles.links}>Контакты</Link>
                        <Link to='/login' className={styles.links}>Войти</Link>
                    </>
                )   
                }

                {role === "admin" && (
                    <>
                        <Link to='/reservation' className={styles.links}>Бронирования</Link>
                        <Link to="/reviews" className={styles.links}>Отзывы</Link>
                        <Link to='/pc' className={styles.links}>Компьютеры</Link>
                        <Link to='/account' className={styles.links}>Личный кабинет</Link>
                    </>
                )}

                {role === "user" && (
                    <>
                    <Link to="/" className={styles.links}>Главная</Link>
                    <Link to='/tariffs' className={styles.links}>Тарифы</Link>
                    <Link to='/reservation' className={styles.links}>Забронировать</Link>
                    <Link to="/menu" className={styles.links}>Меню</Link>
                    <Link to="/reviews" className={styles.links}>Отзывы</Link>
                    <Link to='/contacts' className={styles.links}>Контакты</Link>
                    <Link to='/account' className={styles.links}>Личный кабинет</Link>
                </>
                )}

            </nav>
        </div>

        </>
    )
}

export default HeadNavBar;