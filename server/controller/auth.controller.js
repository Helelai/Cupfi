const db = require("../db")
const argon2 = require("argon2");
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const {secret} = require("../config");

//Функция генерации токена возвращает токен - секретный ключ
function generateAccessToken(id, role) {
    const payload = {
        id, 
        role
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"});
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка регистрации", errors});
            }

            const {surname, name, patronymic, email, phone_number, role_id, username, password} = req.body;
            const candidate = await db.query(`SELECT * FROM "user" WHERE username = $1 OR email = $2`, [username, email]);

            if (candidate.rows.length > 0) {
                const existingUser = candidate.rows[0];
                if (existingUser.username == username) {
                    return res.status(400).json({message: "Ошибка. Пользователь с таким именем уже существует"})
                }

                if (existingUser.email == email) {
                    return res.status(400).json({message: "Ошибка. Пользователь с такой почтой уже существует"})
                }
            }

            const hashedPassword = await argon2.hash(password);
            const newUser = await db.query
            (`INSERT INTO "user" (surname, name, patronymic, email, phone_number, role_id, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [surname, name, patronymic, email, phone_number, role_id, username, hashedPassword]);
            res.json(newUser.rows[0]);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: "Ошибка регистрации"})
        }
    
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;

            //Проверяем, что пользователь с таким логином есть
            const user = await db.query(`SELECT * FROM "user" WHERE username = $1`, [username]);

            if (!user) {
                return res.status(400).json({message: "Такого пользователя не существует"})
            }

            const hashedPassword = user.rows[0].password;
            const validPassword = await argon2.verify(hashedPassword, password);

            if (!validPassword) {
                return res.status(400).json({message: "Неверный пароль"});
            }

            const userRole = user.rows[0].role_id === 1? "admin":"user"; 
            // функция генерации токена
            const token = generateAccessToken(user.rows[0].id, userRole);
            return res.json({token});

        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: "Ошибка авторизации"})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await db.query(`SELECT * FROM "user"`);
            res.json(users);
        }   
        catch(error) {
            console.log(error);
            res.status(400).json({message: "Ошибка получения пользователей"})
        } 
    }
}

module.exports = new AuthController();