const jwt = require("jsonwebtoken");
const {secret} = require("../config")

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: "Пользователь не авторизован"});

            }

            const {role: userRole} = jwt.verify(token, secret)

            if (!userRole) {
                return res.status(403).json({message :"Роль пользователя не определена"});
            }

            if (!roles.includes(userRole)) {
                return res.status(403).json({message: "У вас нет доступа"});
            }
            
            next();
        }
        catch (e) {
            console.log(e);
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
    }
}