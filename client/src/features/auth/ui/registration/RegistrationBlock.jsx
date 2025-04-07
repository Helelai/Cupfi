import { Link } from "react-router-dom"
import CustomSmallButton from "../../../../shared/CustomSmallButton/CustomSmallButton"
import styles from "../registration/RegistrationBlock.module.css"
import { handleRegistration } from "../../model/authModel"

export function RegistrationBlock() {
    return (
        <>
            <h2>Регистрация</h2>
            <p>Заполните поля и создайте аккаунт</p>
            <div className={styles.container}>
                <div className={styles.form}>
                <div className={styles["input-form"]}>
                    <label htmlFor="surname-input" className={styles.label}>Фамилия:</label>
                    <input type="text" id="surname-input" className={styles.input}/>
                </div>

                <div className={styles["input-form"]}>
                    <label htmlFor="name-input" className={styles.label}>Имя:</label>
                    <input type="text" id="name-input" className={styles.input}/>
                </div>

                <div className={styles["input-form"]}>
                    <label htmlFor="patronymic-input" className={styles.label}>Отчество:</label>
                    <input type="text" id="patronymic-input" className={styles.input}/>
                </div>

                <div className={styles["input-form"]}>
                    <label htmlFor="email-input" className={styles.label}>E-mail:</label>
                    <input type="email" id="email-input" className={styles.input}/>
                </div>

                <div className={styles["input-form"]}>
                    <label htmlFor="phone-input" className={styles.label}>Телефон: +7</label>
                    <input type="number" maxLength={10} id="phone-input" className={styles.input}/>
                </div>

                <div className={styles["input-form"]}>
                    <label htmlFor="username-input" className={styles.label}>Логин:</label>
                    <input type="text" id="username-input" className={styles.input}/>
                </div>

                <div className={styles["input-form"]}>
                    <label htmlFor="password-input" className={styles.label}>Пароль:</label>
                    <input type="text" maxLength={10} id="password-input" className={styles.input}/>
                </div>

                <div className={styles["input-form"]}>
                    <label htmlFor="password2-input" className={styles.label}>Повторите пароль:</label>
                    <input type="text" maxLength={10} id="password2-input" className={styles.input}/>
                </div>
                </div>
                <p className={styles["go-to-login"]}>Уже есть аккаунт?</p><Link className={styles.link} to={"/login"}>Войти</Link>

                <div className={styles.button}>
                    <CustomSmallButton onClick={() => {
                        if (document.getElementById("password-input").value == document.getElementById("password2-input").value) {
                            
                            handleRegistration(document.getElementById("surname-input").value, document.getElementById("name-input").value, 
                            document.getElementById("patronymic-input").value, document.getElementById("email-input").value, 
                            document.getElementById("username-input").value, document.getElementById("phone-input").value, 
                            document.getElementById("password-input").value);
                        }
                        else {
                            alert("Повторный пароль не совпадает.");
                        }

                    }}>Зарегестрироваться</CustomSmallButton>
                </div>
            </div>
        </>
    )
}