import { Button } from "@gravity-ui/uikit";
import styles from "./reservation_block.module.css";
import WhiteBlock from "../../shared/white_block/white_block";
import WhiteFrameForm from "../white_frame_form/white_frame_form";
import { useNavigate } from "react-router-dom";

function ReservationBlock() {
    const navigate = useNavigate(); 
    return (
        <div className={styles.reservation}>
            <div>
                <WhiteFrameForm button={"Перейти к бронированию"} onClick={() => navigate("/reservation")} className={styles.textBlock}> 
                    <h4 className={styles.title}>Хотите заранее забронировать место? Теперь это можно сделать онлайн!</h4>
                    <p className={styles.text}>Выбирайте удобное время и зону – игровую или рабочую и ваше место будет готово к вашему приходу.</p>
                </WhiteFrameForm>
            </div>
            <WhiteBlock img="reservation"></WhiteBlock>
        </div>


    )
}

export default ReservationBlock;