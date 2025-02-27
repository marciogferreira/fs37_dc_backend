import ClienteModel from '../models/ClienteModel.js';
import { Op } from "sequelize";
import ClienteServices from '../services/ClienteServices.js';

class ClienteController {

    async findAll(req, res) {
        try {
            const query = req.query;
            // SELECT * FROM clientes WHERE nome like '%M%'
            const dados = await ClienteModel.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${query.nome || ''}%`
                    },
                    email: {
                        [Op.like]: `%${query.email || ''}%`
                    },
                    cpf: {
                        [Op.like]: `%${query.cpf || ''}%`
                    }
                }
            });
            
            return res.json(dados);
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    async findByPK(req, res) {
        try {
            const id = req.params.id;
            const dados = await ClienteModel.findByPk(id);
            return res.json(dados);
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    async create(req, res) {
        try {
            const clienteServices = new ClienteServices();
            const resultado = await clienteServices.criarValidarCliente(req.body);
            return res.json(resultado);
        } catch(error) {
            return res.status(500).json(error);
        } 
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const dados = req.body;
            const resultado = await ClienteModel.update(dados, { where: { id: id } });
            return res.json({
                message: 'Cliente atualizado com sucesso',
                data: resultado
            });
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const resultado = await ClienteModel.destroy({ 
                where: {
                    id: id
                }
            })
            return res.json({
                message: 'Cliente excluído com sucesso',
                data: resultado
            });
        } catch(error) {
            return res.status(500).json(error);
        }
    }
}

export default ClienteController;