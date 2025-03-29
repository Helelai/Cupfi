// Здесь будут маршруты

const Router = require("express");
const router = new Router();

//Подключаем контроллер блюд
const UnitMeasurementController = require("../controller/unit_measurement.controller.js");

router.get("/unit_measurement", UnitMeasurementController.getUnitMeasurements); // получение всех блюд


module.exports = router;