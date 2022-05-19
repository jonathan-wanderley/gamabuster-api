const { Op } = require("sequelize");
const { Reserva, Cliente, Filme } = require("../models");

const ReservaController = {
  getAll: async (req, res) => {
    const listaReservas = await Reserva.findAll({
        include: [
            Cliente,
            {
                model: Filme,
                through: {
                    attributes: []
                }
            }
        ]
    });
    res.json(listaReservas);
  },
  create: async (req, res) => {
    const { data_reserva, data_devolucao, total, cliente_codigo, filmes = [] } = req.body;

    if(!data_reserva || !data_devolucao || !total || !cliente_codigo) {
        return res.status(400).json({ message: "Dados invalidos" });
    }
    console.log(filmes.length);
    if(filmes.length < 1){
        return res.status(400).json({ message: "Dados invalidos" });
    }

    const novaReserva = await Reserva.create({
        data_reserva,
        data_devolucao,
        total,
        cliente_codigo
    });

    const reservaData = await Filme.findAll({
        where: { codigo: { [Op.in]: filmes } },
    });

    await novaReserva.setFilmes(reservaData);

    const result = await Reserva.findByPk(novaReserva.codigo, {
        include: {
            model: Filme,
            through: {
                attributes: []
            }
        }
    });

    res.status(201).json(result);
  },
  getById: async (req, res) => {
    const { id } = req.params;

    const reserva = await Reserva.findByPk(id, {
        include: [
            Cliente,
            {
                model: Filme,
                through: {
                    attributes: []
                }
            }
        ]
    });

    if(!reserva) {
      return res.status(404).json({ message: "Reserva não encontrada" });
    }

    res.json(reserva)
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { data_reserva, data_devolucao, total, filmes = [] } = req.body;

    const reserva = await Reserva.findByPk(id);

    if(data_reserva) { reserva.data_reserva = data_reserva}
    if(data_devolucao) { reserva.data_devolucao = data_devolucao}
    if(total) { reserva.total = total}

    const reservaData = await Filme.findAll({
        where: { codigo: { [Op.in]: filmes } },
    });

    if(reservaData) {
        await reserva.setFilmes(reservaData);
    }

    reserva.save();

    const result = await Reserva.findByPk(reserva.codigo, {
        include: {
            model: Filme,
            through: {
                attributes: []
            }
        }
    })

    res.json(result);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const reserva = await Reserva.findByPk(id);

    if(!reserva) {
        return res.status(404).json({ message: "Reserva não encontrada" });
    }

    await reserva.destroy();

    res.status(204).send("");
  },
};

module.exports = ReservaController;
