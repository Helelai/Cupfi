// Здесь будут маршруты

const Router = require("express");
const router = new Router();

//Подключаем контроллер блюд
const Dish_CategoryController = require("../controller/dish_category.controller");

router.post("/dish_category", Dish_CategoryController.createCategory); // создание блюда
router.get("/dish_category", Dish_CategoryController.getCategories); // создание блюда
router.get("/dish_category/:id", Dish_CategoryController.getCategory); // создание блюда
router.put("/dish_category", Dish_CategoryController.updateCategory); // создание блюда
router.delete("/dish_category/:id", Dish_CategoryController.deleteCategory); // создание блюда

module.exports = router;