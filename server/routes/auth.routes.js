const Router = require("express");
const router = new Router();
const {check} = require("express-validator");
// это нужно для промежуточной проверки 
const authMiddleware = require("../middleware/auth_middleware")
const roleMiddleware = require("../middleware/role_middleware")
const AuthController = require("../controller/auth.controller");

router.get("/check-auth", authMiddleware, (req, res) => {
    //Если пользователь авторизован, возвращаем его и булево значение.
    res.json({isAuth: true, user: req.user})
});

router.post("/registration", [
    check("surname", "Поле фамилии не может быть пустым").notEmpty(),
    check("name", "Поле имени не может быть пустым").notEmpty(),
    check("patronymic", "Поле отчества не может быть пустым").notEmpty(),
    check("email", "Поле почты не может быть пустым").notEmpty(),
    check("email", "Введите корректный адрес электронной почты").isEmail(),
    check("phone_number", "Введите номер телефона").notEmpty(),
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть больше 4 и меньше 10 символов.").isLength({min: 4, max: 10})
],  AuthController.registration);
router.post("/login", AuthController.login);
router.get("/users", [authMiddleware, roleMiddleware(["user"])], AuthController.getUsers);

module.exports = router;