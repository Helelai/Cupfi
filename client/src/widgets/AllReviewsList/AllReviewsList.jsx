import { useEffect, useState } from "react";
import { handleGetAllReviews, handleGetReviews } from "../../entities/reviews/model/reviewsModel";
import { Review } from "../Review/Review";
import { handleGetUsers } from "../../entities/user/model/userModel";


export function AllReviewsList() {
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            const data = await handleGetAllReviews();
            console.log("Отзывы в AllReviewsList:", data); // Проверьте структуру данных
            setReviews(data);
        }

        async function fetchUsers() {
            const data = await handleGetUsers();
            setUsers(data);
        }
        fetchReviews();
        fetchUsers();
    }, [])

    const getUserNameById = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.surname + " " + user.name : "Неизвестный пользователь";
    }
    return (
        <>
            <div className="cont">
                {reviews.map((review) => {
                    const userName = getUserNameById(review.user_id);
                    console.log("review_id", review.id);

                    return (
                        <Review key={review.id} review_id={review.id} user_id={userName} comment={review.comment} 
                        creation_data_and_time={review.creation_data_and_time} rating={review.rating} adminButton={true}></Review>
                    )
                })}
            </div>
        </>
    )
}