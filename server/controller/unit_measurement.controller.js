const db = require("../db");

class UnitMeasurement {
    async getUnitMeasurements(req,res) {
        const unitMeasurements = await db.query("SELECT * FROM unit_measurement");
        res.json(unitMeasurements.rows);
    }
}

module.exports = new UnitMeasurement();