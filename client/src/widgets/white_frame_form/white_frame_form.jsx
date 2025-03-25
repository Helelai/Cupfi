import styles from "../white_frame_form/white_frame_form.module.css";
import CustomSmallButton from "../CustomSmallButton/CustomSmallButton";

function WhiteFrameForm({children, button, onClick}) {
    return (
        <div className={styles.form}>
            <p className={styles.text}>{children}</p>
            {button && <CustomSmallButton onClick={onClick}>{button}</CustomSmallButton> }
        </div>
    )
}

export default WhiteFrameForm;