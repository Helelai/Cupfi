// импортируем бд
const db = require("../db");
class DishController {
    async createDish(req,res) {
        // Получаем нужную информацию из запроса
        const { name, price, category_id, description, weight, unit_measurement, dish_status } = req.body;
        //Делаем запрос к бд
        // RETURNING нужно, чтобы после выполнения оно вернуло блюдо
        const newDish = await db.query(
            "INSERT INTO dish (name, price, category_id, description, weight, unit_measurement, dish_status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [name, price, category_id, description, weight, unit_measurement, dish_status]
        );
        //Выводим
        res.status(200).json(newDish.rows[0]);
    }
    async getDishes(req,res) {
        //Получаем категорию блюда из бд
        const {category} = req.query;
        let dishes;
        
        //Если категория есть - выводим все блюда этой категории
        if (category) {
            dishes = await db.query("SELECT * FROM dish where category_id = $1",[category]);
        }
        //Если нет - выводим все блюда
        else {
            dishes = await db.query("SELECT * FROM dish where dish_status_id = 1");
        }
        res.status(200).json(dishes.rows);
    }
    async getDish(req,res) {
        //Получаем айди блюда из запроса
        const id = req.params.id;
        //Ищем блюдо с таким айди
        const dish = await db.query("SELECT * FROM dish where id = $1", [id]);
        res.status(200).json(dish.rows[0]);
    }
    async updateDish(req,res) {
        try {
        //Получаем все поля
        const { name, price, category_id } = req.body;
        const dish = await db.query("UPDATE dish set name = $1, price = $2, category_id = $3 RETURNING *", [name, price, category_id]);
        res.status(200).json(dish.rows[0]);
        }
        catch(error) {
            console.error("Ошибка:" + error);
            return res.status(400).json({message: "Возникла ошибка при обновлении блюда."})
        }
    }
    
}

module.exports = new DishController();