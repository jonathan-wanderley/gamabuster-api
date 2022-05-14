const ReservaController = {
    getAll: (req, res) => {
        res.json([]);
    },
    getById: (req, res) => {
        const { id } = req.params;
        
        res.json({
            codigo: id,
            data_reserva: '2022/05/23',
            data_limite_devolucao: '2022/06/13',
            total: 30.90
        });
    },
    create: (req, res) => {
        res.status(201).json(req.body);
    },   
    update: (req, res) => {
        const { id } = req.params;
  
        res.json({
            codigo: id,
            ...(req.body || {}),
        });
    },
    delete: (req, res) => {
        res.status(204).json();
    },
}

module.exports = ReservaController;