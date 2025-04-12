// Здесь будут маршруты

const Router = require("express");
const router = new Router();

//Подключаем контроллер пользователя
const UserController = require("../controller/user.controller");

router.get("/users", UserController.getUsers); // получение всех блюд
router.put("/users", UserController.updateUser); // обновление блюда

module.exports = router;