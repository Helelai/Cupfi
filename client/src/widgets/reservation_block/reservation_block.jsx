import { Button } from "@gravity-ui/uikit";
import styles from "../reservation_block/reservation_block.module.css";
import WhiteBlock from "../white_block/white_block";
import WhiteFrameForm from "../white_frame_form/white_frame_form";

function ReservationBlock() {
    return (
        <div className={styles.reservation}>
            <div className={styles.textBlock}>
                <WhiteFrameForm text={"Cupfi – это место, где комфорт и технологии создают идеальное пространство для отдыха и работы. У нас можно расслабиться с любимым напитком, поиграть, поработать или просто провести время в приятной атмосфере."}>
                    <Button>Забронировать</Button>
                </WhiteFrameForm>
            </div>
            <WhiteBlock img="welcome"></WhiteBlock>
        </div>


    )
}

export default ReservationBlock;