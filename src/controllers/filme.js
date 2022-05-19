const { Filme, Genero } = require("../models");
const database = require('../database/index');
const { Op } = require("sequelize");

const FilmeController = {
    getAll: async (req, res) => {
        // await database.sync({ force: true }); 
        const filmes = await Filme.findAll({
            include: {
                model: Genero,
                through: {
                    attributes: []
                }
            }
        });
        res.json(filmes);
    },
    create: async (req, res) => {
        const { nome, ano_lancamento, duracao, estoque, generos = [] } = req.body;

        if(!nome || !ano_lancamento || !duracao || !estoque) {
            return res.status(400).json({ message: "Dados invalidos" });
        }

        const novoFilme = await Filme.create({ nome, ano_lancamento, duracao, estoque });

        const generosData = await Genero.findAll({
            where: { nome: { [Op.in]: generos } },
          });

        await novoFilme.setGeneros(generosData);

        const result = await Filme.findByPk(novoFilme.codigo, {
            include: {
                model: Genero,
                through: {
                    attributes: []
                }
            }
        });

        res.status(201).json(result);
    },
    getById: async (req, res) => {
        const { id } = req.params;

        const film = await Filme.findByPk(id, {
            include: {
                model: Genero,
                through: {
                    attributes: []
                }
            }
        })

        if(!film) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

        res.json(film);
    },
    update: async (req, res) => {
        const { id } = req.params;
      const { nome, ano_lancamento, estoque, duracao, generos } = req.body;

        const filme = await Filme.findByPk(id);

        if(!filme) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

        await Filme.update(
            { nome, ano_lancamento, estoque, duracao },
            { where: { codigo: id } }
        );

        if (Array.isArray(generos)) {
            const generosData = await Genero.findAll({
              where: { nome: { [Op.in]: generos } },
            });
    
            await filme.setGeneros(generosData);
        }

        const result = await Filme.findByPk(id, {
            include: {
                model: Genero,
                through: {
                    attributes: []
                }
            }
        });

        res.json(result);
    },
    delete: async (req, res) => {
        const { id } = req.params;

        const filme = await Filme.findByPk(id);

        if(!filme) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

        await filme.destroy();

        res.status(204).send("");
    },
};

module.exports = FilmeController;
