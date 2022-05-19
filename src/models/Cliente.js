const { DataTypes } = require('sequelize');
const database = require('../database')

const Cliente = database.define('cliente', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
},
{
    tableName: 'clientes',
    timestamps: false,
    underscored: true
});

module.exports = Cliente;