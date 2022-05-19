const { Genero } = require("../models")

const GeneroController = {

    getAll: async (req, res) => {
        const allGeneros = await Genero.findAll();
        res.json(allGeneros);
    },

    create: async (req, res) => {
        const { nome } = req.body;

        if(!nome) {
            return res.status(400).json({ message: "Insira um nome valido" })
        }

        const novoGenero = await Genero.create({ nome });

        res.status(201).json(novoGenero);
    },

    getById: async (req, res) => {
        const { id } = req.params;

        const genero = await Genero.findByPk(id);

        if(!genero) {
            return res.status(404).json({ message: "Genero não encontrado" });
        }

        res.json(genero)
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { nome } = req.body;

        const genero = await Genero.findByPk(id);

        if(!genero) {
            return res.status(404).json({ message: "Genero não encontrado" });
        }

        genero.nome = nome;
        await genero.save();

        res.json(genero);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const genero = await Genero.findByPk(id);

        if(!genero) {
            return res.status(404).json({ message: "Genero não encontrado" });
        }

        await genero.destroy();

        res.status(204).send("");
    },
};

module.exports = GeneroController;
