const { DataTypes } = require('sequelize');
const database = require('../database')

const Filme = database.define('filme', {
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
    ano_lancamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duracao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: 'filmes',
    timestamps: false,
    underscore: true
});

module.exports = Filme;