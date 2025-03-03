// Для формирования бд
// С помощью него мы делаем запросы к базе данных

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "Cupfi"
});

// Экспортируем его
module.exports = pool