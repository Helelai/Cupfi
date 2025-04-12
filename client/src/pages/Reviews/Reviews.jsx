import { ReviewCreationForm } from "../../widgets/ReviewCreationForm/ReviewCreationForm";
import "../../app/styles/style.css";
import styles from "../Reviews/Reviews.module.css"
import { CustomSmallestShadowButton } from "../../shared/CustomSmallestShadowButton/CustomSmallestShadowButton";
import { ReviewsList } from "../../widgets/ReviewsList/ReviewsList";
import { useAuth } from "../../features/auth/model/useAuth";
import { AllReviewsList } from "../../widgets/AllReviewsList/AllReviewsList";

function Reviews() {
    const role = useAuth();
    
    return (
        <>
            <div className="pageCont">
                <h2>Отзывы</h2>
                <div className={styles.cont}>
                    {/* Для администратора */}
                    {role === "admin" && <AllReviewsList />}

                    {/* Для пользователя */}
                    {role === "user" && (
                        <>
                            <ReviewCreationForm />
                            <ReviewsList />
                        </>
                    )}

                    {/* Для гостей */}
                    {role === "guest" && <ReviewsList />}
                </div>

            </div>

        </>
    )
}

export default Reviews;