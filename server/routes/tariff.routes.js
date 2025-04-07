// Подключаем роутер для настройки путей
const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/auth_middleware")
const roleMiddleware = require("../middleware/role_middleware")

//Подключаем контроллер
const tariffController = require("../controller/tariff.controller");

router.post("/tariff",[authMiddleware, roleMiddleware(["admin"])], tariffController.createTariff);
router.get("/tariff", tariffController.getTariffs);
router.put("/tariff/:id", [authMiddleware, roleMiddleware(["admin"])], tariffController.updateTariff);

module.exports = router;