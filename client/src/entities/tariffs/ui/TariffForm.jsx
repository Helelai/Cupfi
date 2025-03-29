import { Children } from "react";
import CustomSmallButton from "../../../widgets/CustomSmallButton/CustomSmallButton";
import styles from "../ui/TariffForm.module.css";
import { CustomSmallestShadowButton } from "../../../widgets/CustomSmallestShadowButton/CustomSmallestShadowButton";
import { useNavigate } from "react-router-dom";

export function TariffForm({children, ...props}) {
    props.description = props.description.replace(/\\n/g, "\n");

    const navigate = useNavigate();

    return (
        <>
        <div className={styles["tariff-card"]}>
            <img src={`${props.img}.png`} alt={props.img} className={styles.img}/>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.text}>{children}</div>
            <div className={props.price}></div>
            <CustomSmallestShadowButton onClick={() => navigate("/reservation")}>Забронировать</CustomSmallestShadowButton>
        </div>
        </>
    )
}