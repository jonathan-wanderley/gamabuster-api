const GeneroController = {
    getAll: (req, res) => {
        res.json([]);
    },
    getById: (req, res) => {
        const { id } = req.params;
        
        res.json({
            codigo: id,
            nome: `Suspense`,
        });
    },
    create: (req, res) => {
        res.status(201).json(req.body);
    },   
    update: (req, res) => {
        const { id } = req.params;
  
        res.json({
            id,
            ...(req.body || {}),
        });
    },
    delete: (req, res) => {
        res.status(204).json({});
    },
}

module.exports = GeneroController;