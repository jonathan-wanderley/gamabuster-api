const { Cliente, Endereco, Reserva } = require("../models");

const ClienteController = {
    getAll: async (req, res) => {
        const allClientes = await Cliente.findAll({
            include: [
                Reserva,
                Endereco
            ]
        });
        res.json(allClientes);
    },

    getById: async (req, res) => {
        const { id } = req.params;

        const cliente = await Cliente.findByPk(id, {
            include: [
                Reserva,
                Endereco
            ]
        });

        if(!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
        
        res.json(cliente);
    },

    create: async (req, res) => {
        const { nome, sobrenome, cpf, telefone, email, data_nascimento,
            endereco = {} } = req.body;

        const { logradouro, numero, bairro, cidade, estado, cep } = endereco;
        
        if(!nome || !sobrenome || !cpf || !telefone || !email || !data_nascimento) {
            return res.status(400).json({ message: "Dados invalidos" });
        }

        const hasCliente = await Cliente.findOne({ where: { email: email } });
        if(hasCliente) {
            return res.status(400).json({ message: "Email já cadastrado" })
        }

        const newCliente = await Cliente.create(
            {
              nome,
              sobrenome,
              cpf,
              telefone,
              email,
              data_nascimento,
              Endereco: {
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                cep,
              },
            },
            { include: [Endereco] }
        );
    
        res.status(201).json(newCliente);    
    },   

    update: async (req, res) => {
        const { id } = req.params;
        const { nome, sobrenome, cpf, telefone, email, data_nascimento, endereco = {} } = req.body;

        const { logradouro, numero, bairro, cidade, estado, cep } = endereco;

        const cliente = await Cliente.findByPk(id, { include: Endereco });

        if (!cliente) {
            return res.status(404).json({
              message: "Cliente não encontrado",
            });
        }

        await Cliente.update(
            { nome, sobrenome, cpf, telefone, email, data_nascimento },
            { where: { codigo: id } }
        );

        if (cliente.Endereco?.codigo) {
            await Endereco.update(
              { logradouro, numero, bairro, cidade, estado, cep },
              { where: { codigo: cliente.Endereco.codigo } }
            );
        } else {
            await Endereco.create({
              logradouro,
              numero,
              bairro,
              cidade,
              estado,
              cep,
              cliente_codigo: id,
            });
        }

        const result = await Cliente.findByPk(id, {
            include: Endereco,
        });

        res.json(result);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }

        await cliente.destroy();

        res.status(204).send("");
    },
}

module.exports = ClienteController;