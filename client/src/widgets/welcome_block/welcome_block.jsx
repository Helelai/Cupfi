import WhiteBlock from "../white_block/white_block";
import WhiteFrameForm from "../white_frame_form/white_frame_form";
import styles from "../welcome_block/welcome_block.module.css"

function WelcomeBlock() {
    return (
        <div className={styles.welcome}>
            <WhiteBlock img="welcome"></WhiteBlock>
            <div className={styles.textBlock}>
                <WhiteFrameForm 
                text={"Cupfi – это место, где комфорт и технологии создают идеальное пространство для отдыха и работы. У нас можно расслабиться с любимым напитком, поиграть, поработать или просто провести время в приятной атмосфере."}>
                </WhiteFrameForm>
            </div>
        </div>


    )
}

export default WelcomeBlock;