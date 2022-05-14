const ClienteController = {
    getAll: (req, res) => {
        res.json([]);
    },
    getById: (req, res) => {
        const { id } = req.params;
        
        res.json({
            codigo: id,
            nome: 'Joao',
            sobrenome: 'Antonio',
            cpf: '123.123.123-23',
            endereco: 'Rua da bolacha, 666, Bairro Treloso, Caruaru',
            telefone: '40028922',
            email: 'umemail@gmail.com',
            data_nascimento: '01/11/1589'
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
        res.status(204).json({});
    },
}

module.exports = ClienteController;