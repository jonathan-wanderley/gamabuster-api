const { DataTypes } = require('sequelize');
const database = require('../database')

const Reserva = database.define('reserva', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    data_reserva: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    data_limite_devolucao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: 'reservas',
    timestamps: false,
    underscored: true
});

module.exports = Reserva;