const { DataTypes } = require('sequelize');
const database = require('../database')

const FilmeGenero = database.define('filmegenero', {
},
{
    tableName: 'filme_genero',
    timestamps: false,
    underscored: true
});

module.exports = FilmeGenero;