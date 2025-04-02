import { Button } from "@gravity-ui/uikit"
import styles from "../CustomSmallestShadowButton/CustomSmallestShadowButton.module.css"

export function CustomSmallestShadowButton({children, ...props}) {
    return (
        <>
            <div className="container">
                <Button className={styles.button} {...props}>{children}</Button>
            </div>
        </>
    )
}