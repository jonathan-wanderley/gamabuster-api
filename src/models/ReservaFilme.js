const { DataTypes } = require('sequelize');
const database = require('../database')

const ReservaFilme = database.define('reservaFilme', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_devolucao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    tableName: 'reserva_filme',
    timestamps: false,
    underscored: true
});

module.exports = ReservaFilme;