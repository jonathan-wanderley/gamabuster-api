const { Sequelize } = require('sequelize');

const DB_NAME = "gamabuster";
const DB_USER = "root";
const DB_PASS = "root";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
}

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.log("Erro ao conectar no banco de dados: ", error.message);
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("📦 Banco de dados conectado!");
    } catch (error) {
        console.log("Erro ao conectar no banco de dados: ", error.message);
    }
}

Object.assign(db, { hasConnection });

module.exports = db;