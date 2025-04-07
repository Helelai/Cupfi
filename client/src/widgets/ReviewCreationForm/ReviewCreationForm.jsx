import styles from "../ReviewCreationForm/ReviewCreationForm.module.css"
import {CustomSmallestShadowButton} from "../../shared/CustomSmallestShadowButton/CustomSmallestShadowButton"
import { handleCreateReview } from "../../entities/reviews/model/reviewsModel"
import { useAuth } from "../../features/auth/model/useAuth"

export function ReviewCreationForm() {
    const role = useAuth();

    if (role !== "user") {
        return (<></>);
    }

    return (
        <>
            <div className={styles.cont}>
                <h3>Написать отзыв</h3>
                <div className={styles["input-form"]}>
                    <label htmlFor="comment-input">Отзыв:</label>
                    <textarea className="comment-input" id="comment-input"></textarea>
                </div>
                <div className={styles["input-form"]}>
                    <label htmlFor="grade-input">Оценка:</label>
                    <input type="number" max={5} min={1} maxLength={1} className="grade-input" id="grade-input"/>
                </div>

                <div className={styles.button}>
                    <CustomSmallestShadowButton onClick={() => {
                        console.log(document.getElementById("comment-input").value, document.getElementById("grade-input").value);
                        handleCreateReview(document.getElementById("comment-input").value, document.getElementById("grade-input").value)
                    }}>Отправить</CustomSmallestShadowButton>
                </div>

            </div>
        </>
    )
}