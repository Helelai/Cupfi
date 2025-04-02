import styles from "../registration/RegistrationBlock.module.css"

export function RegistrationBlock() {
    return (
        <>
            <h2>Регистрация</h2>
            <div className={styles.container}>
                <div className={styles.form}>
                    <label htmlFor="surname-input">Фамилия:</label>
                    <input type="text" id="surname-input"/>
                </div>

            </div>
        </>
    )
}