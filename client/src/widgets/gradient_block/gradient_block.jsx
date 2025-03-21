import styles from "../gradient_block/gradient_block.module.css"
function GradientBlock({title, text}) {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.content}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
        </>
    )
}

export default GradientBlock;