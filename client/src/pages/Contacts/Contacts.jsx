import "../../app/styles/style.css" 
import styles from "../Contacts/Contacts.module.css"

function Contacts() {
    
    return (
        <>
            <div className="pageCont">
                <h2>Контакты</h2>


                <div className={styles.cont}>
                    <h3>Где нас найти?</h3>
                    <p>Россия, г. Санкт-Петербург, Дачная ул., д. 5 кв.153</p>
                </div>
                
                
                <div className={styles.cont}>
                    <h3>Как с нами связаться?</h3>
                    <p>Вы можете позвонить на нашу горячую линию по номеру: </p>
                    <p>+7(995) 443-56-86</p>
                    <p>Вы также можете отправить письмо на нашу почту:</p>
                    <p>cupfi@inbox.ru</p>
                </div>


                <p className={styles.title}>Мы всегда на связи!</p>
            </div>

        </>
    )
}

export default Contacts;