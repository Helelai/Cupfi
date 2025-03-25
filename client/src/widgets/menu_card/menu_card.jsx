import { useEffect, useState } from "react";
import styles from "../menu_card/menu_card.module.css"

function MenuCard({name, description, price, imageUrl, category}) {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.img} src={imageUrl} alt={name}></img>
                <p className={styles.name}>{name}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>{price} ₽</p>
            </div>
        </>
    )
}

export default MenuCard;