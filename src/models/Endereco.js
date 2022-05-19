const { DataTypes } = require('sequelize');
const database = require('../database');
const Cliente = require('./Cliente');

const Endereco = database.define('endereco', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'enderecos',
    timestamps: false,
    underscored: true
});

module.exports = Endereco;