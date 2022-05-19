const { DataTypes } = require('sequelize');
const database = require('../database')

const ReservaFilme = database.define('reservaFilme', {
    
},
{
    tableName: 'reserva_filme',
    timestamps: false,
    underscored: true
});

module.exports = ReservaFilme;