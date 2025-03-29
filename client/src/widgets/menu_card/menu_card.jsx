import { useEffect, useState } from "react";
import styles from "../menu_card/menu_card.module.css"

function MenuCard({name, description, price, imageUrl, weight, unit_measurement}) {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.img} src={imageUrl} alt={name}></img>
                <p className={styles.name}>{name}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.weight}>{weight} {unit_measurement}</p>
                <p className={styles.price}>{price} ₽</p>
            </div>
        </>
    )
}

export default MenuCard;