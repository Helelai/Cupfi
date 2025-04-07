import { Link } from "react-router-dom";
import CustomSmallButton from "../../../../shared/CustomSmallButton/CustomSmallButton"
import { handleLogin } from "../../model/authModel";
import styles from "../registration/RegistrationBlock.module.css"

export function AuthorizationBlock() {
    return (
        <>
            <h2>Авторизация</h2>
            <p>Заполните поля и войдите в свой профиль</p>
            <div className={styles.container}>
                <div className={styles.form}>
                    <div className={styles["input-form"]}>
                        <label htmlFor="username-input" className={styles.label}>Логин:</label>
                        <input type="text" id="username-input" className={styles.input}/>
                    </div>

                    <div className={styles["input-form"]}>
                        <label htmlFor="password-input" className={styles.label}>Пароль:</label>
                        <input type="text" id="password-input" className={styles.input}/>
                    </div>
                </div>
                <p className={styles["go-to-login"]}>Еще нет аккаунта?<br></br></p><Link className={styles.link} to={"/registration"}>Зарегестрироваться</Link>

                <div className={styles.button}>
                    <CustomSmallButton onClick={() => {
                        handleLogin(document.getElementById("username-input").value, document.getElementById("password-input").value);
                    }}>Войти</CustomSmallButton>
                </div>
            </div>
        </>
    )
}