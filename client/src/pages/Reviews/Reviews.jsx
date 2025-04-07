import { ReviewCreationForm } from "../../widgets/ReviewCreationForm/ReviewCreationForm";
import "../../app/styles/style.css";
import styles from "../Reviews/Reviews.module.css"
import { CustomSmallestShadowButton } from "../../shared/CustomSmallestShadowButton/CustomSmallestShadowButton";

function Reviews() {
    
    return (
        <>
            <div className="pageCont">
                <h2>Отзывы</h2>
                <div className={styles.cont}>
                    <ReviewCreationForm></ReviewCreationForm>
                    
                </div>

            </div>

        </>
    )
}

export default Reviews;