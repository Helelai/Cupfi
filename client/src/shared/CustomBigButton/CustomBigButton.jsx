import { Button } from "@gravity-ui/uikit";
import styles from "./CustomBigButton.module.css"

function CustomBigButton({children, className, ...props}) {
    return (
        <>
        <Button className={`${styles["custom-button"]} ${className || ""}`} {...props}>{children}</Button>
        </>
    )
}

export default CustomBigButton;