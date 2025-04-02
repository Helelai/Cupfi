import styles from "./Footer.module.css"

export function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <p>Россия, г. Санкт-Петербург, Дачная ул., д. 5 кв.153</p>
                    <p>+7(995) 443-56-86</p>
                    <p>E-mail: cupfi@inbox.ru</p>
                </div>
                <div className={styles.icons}>
                    <img src="/vk.png" alt="vk" href="#"/>
                    <img src="/tg.png" alt="vk" />
                </div>
            </div>
        </footer>
        </>
    )
}

