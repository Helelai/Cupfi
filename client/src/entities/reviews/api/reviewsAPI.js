import { API_URL } from "../../../../config";

export async function createReview(user_id, comment, creation_data_and_time, rating, review_status_id) {
    console.log(`${user_id} ${comment} ${creation_data_and_time} ${rating} ${review_status_id}`)

    const response = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body:JSON.stringify({user_id, comment, creation_data_and_time, rating, review_status_id})
    }
    ).catch((error) => {
        console.log("Возникла ошибка при отправке запроса: " + error);
        return error;
    })

    return await response.json();
}

export async function getAllReviews() {
    const response = await fetch(`${API_URL}/all-reviews`, {
        method: "GET",
    }).catch((error) => {
        console.log("Возникла ошибка при отправке запроса: " + error);
        return error;
    })

    return await response.json();
}

export async function getReviews() {
    const response = await fetch(`${API_URL}/reviews`, {
        method: "GET",
    }).catch((error) => {
        console.log("Возникла ошибка при отправке запроса: " + error);
        return error;
    })

    return await response.json();
}

export async function updateReview(id) {
    const review_status_id = 2;
    console.log(id + " " + review_status_id)
    const response = await fetch(`${API_URL}/review/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body:JSON.stringify({id, review_status_id})
    }).catch((error) => {
        console.log("Возникла ошибка при отправке запроса: " + error);
        return error;
    })

    return await response.json();
}