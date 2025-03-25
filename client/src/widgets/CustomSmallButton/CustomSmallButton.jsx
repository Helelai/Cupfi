import { Button } from "@gravity-ui/uikit";
import styles from "../CustomSmallButton/CustomSmallButton.module.css"

function CustomSmallButton({children, className, ...props}) {
    return (
        <>
        <Button className={`${styles["custom-button"]} ${className || ""} `}{...props}>{children}</Button>
        </>
    )
}

export default CustomSmallButton;