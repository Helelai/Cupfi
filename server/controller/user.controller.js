const db = require("../db");
const argon2 = require("argon2");

class UserController {
    async getUsers(req,res) {
        const users = await db.query(`SELECT * FROM "user"`);
        res.status(200).json(users.rows);
    }
    async updateUser(req, res) {
       try {
        const {surname, name, patronymic, email, phone_number, username, password} = req.body;
        const hashedPassword = await argon2.hash(password);
        const user = await db.query(`UPDATE "user" set surname = $1, name = $2, patronymic = $3, email = $4, phone_number = $5, username = $6, password = $7 RETURNING *`, [surname, name, patronymic, email, phone_number, username, hashedPassword]);
       } 
       catch(error) {
        console.error("Ошибка:" + error);
        return res.status(400).json({message: "Возникла ошибка при обновлении пользователя."});
       }
    }
}

module.exports = new UserController();