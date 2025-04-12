import { useEffect, useState } from "react";
import { handleGetReviews } from "../../entities/reviews/model/reviewsModel";
import { Review } from "../Review/Review";
import { handleGetUsers } from "../../entities/user/model/userModel";


export function ReviewsList() {
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            const data = await handleGetReviews();
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

                    return (
                        <Review user_id={userName} comment={review.comment} 
                        creation_data_and_time={review.creation_data_and_time} rating={review.rating}></Review>
                    )
                })}
            </div>
        </>
    )
}