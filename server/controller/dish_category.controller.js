// импортируем бд
const db = require("../db");

class Dish_CategoryController {
    async createCategory(req,res) {

        // получаем название категории из запроса
        const {name} = req.body; // {} - нужно для получения только name
        const newCategory = await db.query("INSERT INTO dish_category (name) values ($1) RETURNING *", [name]);
        console.log(name);
        res.json(newCategory.rows[0]);
    }
    async getCategories(req,res) {
        const categories = await db.query("SELECT * FROM dish_category");
        res.status(200).json(categories.rows);
    }
    async getCategory(req,res) {
        
    }
    async updateCategory(req,res) {
        
    }
    async deleteCategory(req,res) {
        
    }
}

module.exports = new Dish_CategoryController();