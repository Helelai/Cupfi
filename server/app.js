//Подключаем express
const express = require("express");
const path = require("path");
const cors = require("cors");
const categoryRouter = require("../server/routes/dish_category.routes")

// Обозначаем порт сервера, если нет значения - задаем 8081, потому что 8080 занят
const PORT = process.env.PORT || 8081

// Инициализируем наше приложение
const app = express()

app.use(cors()); // Разрешаем клиенту делать запросы
app.use(express.json());
app.use("/api", categoryRouter);

// Статические файлы
//app.use(express.static(path.join(__dirname, "../client/src"))); //путь до script.js
app.use(express.static(path.join(__dirname, "public"))); //путь до script.js

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

console.log("Запускаем сервер Express...");
app.listen(PORT, () => {
    console.log(`Server startend on port: ${PORT}`)
})
