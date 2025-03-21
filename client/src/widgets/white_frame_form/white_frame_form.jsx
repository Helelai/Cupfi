import styles from "../white_frame_form/white_frame_form.module.css";

function WhiteFrameForm({text}) {
    return (
        <div className={styles.form}>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default WhiteFrameForm;