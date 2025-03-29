// импортируем бд
const db = require("../db");

class Tariff {
    async createTariff(req, res) {
        // Берем нужные параметры из запроса
        const {name, cost_per_hour, description, max_reservation_time} = req.body;
        const newTariff = await db.query("INSERT INTO tariff (name, cost_per_hour, description, max_reservation_time) VALUES ($1, $2, $3, $4) RETURNING *", [name, cost_per_hour, description, max_reservation_time]);
        res.json(newTariff.rows[0]);
    }

    async getTariffs(req, res) {
        let tariffs = await db.query("SELECT * FROM tariff");
        res.json(tariffs.rows);
    }

    async updateTariff(req, res) {
        const { id } = req.params; 
        const {name, cost_per_hour, description, max_reservation_time} = req.body;
        const tariff = await db.query("UPDATE tariff set name = $1, cost_per_hour = $2, description = $3, max_reservation_time = $4 where id = $5 RETURNING *", [name, cost_per_hour, description, max_reservation_time, id]);
        res.json(tariff.rows[0]);
    }
}

module.exports = new Tariff();