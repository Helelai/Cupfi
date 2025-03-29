// Подключаем роутер для настройки путей
const Router = require("express");
const router = new Router();

//Подключаем контроллер
const tariffController = require("../controller/tariff.controller");

router.post("/tariff", tariffController.createTariff);
router.get("/tariff", tariffController.getTariffs);
router.put("/tariff/:id", tariffController.updateTariff);

module.exports = router;