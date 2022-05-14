const FilmeController = {
    getAll: (req, res) => {
        res.json([]);
    },
    getById: (req, res) => {
        const { id } = req.params;
        
        res.json({
            codigo: id,
            nome: `Nome do filme`,
            ano_lancamento: '2018',
            duracao: 120,
            estoque: 4
        });
    },
    create: (req, res) => {
        res.status(201).json(req.body);
    },   
    update: (req, res) => {
        const { id } = req.params;
  
        res.json({
            codigo:id,
            ...(req.body || {}),
        });
    },
    delete: (req, res) => {
        res.status(204).json();
    },
}

module.exports = FilmeController;