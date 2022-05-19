const { DataTypes } = require('sequelize');
const database = require('../database')

const Genero = database.define('genero', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'generos',
    timestamps: false,
    underscored: true
});

module.exports = Genero;