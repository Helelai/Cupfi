import { createReview, getAllReviews, getReviews, updateReview } from "../api/reviewsAPI";
import { API_URL } from "../../../../config";

function getFormattedDateTime() {
    const now = new Date();

    // Получаем компоненты даты и времени
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
    const day = String(now.getUTCDate()).padStart(2, "0");
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");

    // Формируем строку в формате YYYY-MM-DD HH:MM:SS+00
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}+00`;
}

export async function handleCreateReview(comment, rating) {
    const creation_data_and_time = getFormattedDateTime();// НУЖНО ИЗМЕНИТЬ
    if (!comment || !rating) {
        alert("Заполните все поля");
        return null;
    } 

    const token = localStorage.getItem("token");

    //Если есть - ищем его роль
    const response = await fetch(`${API_URL}/auth/check-auth`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    }).catch((error) => {
        console.log("Возникла ошибка при проверке токена.");
        return null;
    })

    const data = await response.json()

    const user_id = data.user.id;
    console.log(user_id);
    const review_status_id = 2;
    const review = await createReview(user_id, comment, creation_data_and_time, rating, review_status_id);
    alert("Ваш отзыв будет опубликован в ближайшее время сразу после того, как пройдет модерацию!");
    return review;
}

export async function handleGetAllReviews() {
    const allReviews = await getAllReviews();
    console.log("AllReviews: ", allReviews);
    return allReviews;
}

export async function handleGetReviews() {
    const reviews = await getReviews();
    return reviews;
}

export async function handleUpdateReview(id) {
    const reviews = await updateReview(id).catch((error) => {
        console.log(error);
        return null;
    });
    return reviews;
}
