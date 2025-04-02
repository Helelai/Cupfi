import styles from "./white_block.module.css";

function WhiteBlock({img}) {
    return (
        <div className={styles.block}>
            <img className={styles.img} src={`/${img}.jpg`} alt="img" />
        </div>
    );

}

export default WhiteBlock;