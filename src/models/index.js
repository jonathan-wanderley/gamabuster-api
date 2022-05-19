const Filme = require('./Filme');
const Genero = require('./Genero');
const Reserva = require('./Reserva');
const ReservaFilme = require('./ReservaFilme');
const Cliente = require('./Cliente');
const Endereco = require('./Endereco');
const FilmeGenero = require('./FilmeGenero');


Cliente.hasOne(Endereco, {
    constraint: true,
    foreignKey: 'cliente_codigo'
});
Endereco.belongsTo(Cliente, {
    constraint: true,
    foreignKey: 'cliente_codigo'
});


Cliente.hasMany(Reserva, {
    constraint: true,
    foreignKey: 'cliente_codigo'
});
Reserva.belongsTo(Cliente, {
    constraint: true,
    foreignKey: 'cliente_codigo'
});


Filme.belongsToMany(Reserva, { through: ReservaFilme });
Reserva.belongsToMany(Filme, { through: ReservaFilme });


Filme.belongsToMany(Genero, { through: FilmeGenero });
Genero.belongsToMany(Filme, { through: FilmeGenero });


module.exports = {
    Filme,
    Genero,
    Reserva,
    ReservaFilme,
    Cliente,
    Endereco
}