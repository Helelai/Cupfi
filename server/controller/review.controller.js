const db = require("../db");

class ReviewController {
    async getAllReviews(req, res) {
        try {
            const allReviews = await db.query("SELECT * FROM review");
            res.status(200).json(allReviews.rows);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({message: "Возникла ошибка при получении всех отзывов."});
        }
    }

    async getReviews(req, res) {
        try {
            const reviews = await db.query(`SELECT * FROM review where review_status_id = 2`);
            res.status(200).json(reviews.rows);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({message: "Возникла ошибка при получении опубликованных отзывов."})
        }
    }

    async createReview(req, res) {
        try {
            const {user_id, comment, creation_data_and_time, rating, review_status_id} = req.body;
            const newReview = await db.query("INSERT INTO review (user_id, comment, creation_data_and_time, rating, review_status_id) values ($1, $2, $3, $4, $5) RETURNING *", [user_id, comment, creation_data_and_time, rating, review_status_id]);
            res.status(200).json(newReview.rows[0]);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({message: "Возникла ошибка при создании отзыва."})
        }
    }

    async updateReview(req, res) {
        try {
            const {id, review_status_id} = req.body;
            const editedReview = await db.query("UPDATE review set review_status_id = $1 where id = $2 RETURNING *", [review_status_id, id]);
            res.status(200).json(editedReview.rows[0]);
        }
        catch(error) {
            console.log(error);
            return res.status(400).json({message: "Возникла ошибка при обновлении отзыва."})
        }
    }
}

module.exports = new ReviewController();
