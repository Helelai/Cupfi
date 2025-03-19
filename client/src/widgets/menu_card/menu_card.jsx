import { useEffect, useState } from "react";
import "../menu_card/menu_card.modules.css"

function MenuCard({name, description, price, imageUrl, category}) {
    return (
        <>
            <div className="card">
                <img className="img" src={imageUrl} alt={name}></img>
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="price">{price} ₽</p>
            </div>
        </>
    )
}

export default MenuCard;