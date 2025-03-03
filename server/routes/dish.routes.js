// Здесь будут маршруты

const Router = require("express");
const router = new Router();

//Подключаем контроллер блюд
const DishController = require("../controller/dish.controller");

router.post("/dish", DishController.createDish); // создание блюда
router.get("/dish", DishController.getDishes); // получение всех блюд
router.get("/dish/:id", DishController.getDish); // получение конктретного блюда по айди
router.put("/dish", DishController.updateDish); // обновление блюда
router.delete("/dish/:id", DishController.deleteDish); //удаление конкретного блюда

module.exports = router;