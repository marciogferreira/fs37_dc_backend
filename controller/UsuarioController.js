import UsuarioModel from '../models/UsuarioModel.js';
import { Op } from "sequelize";

class UsuarioController {

    async findAll(req, res) {
        try {
            const query = req.query;
            const dados = await UsuarioModel.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${query.nome || ''}%`
                    },
                    email: {
                          [Op.like]: `%${query.email || ''}%`
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
            const dados = await UsuarioModel.findByPk(id);
            return res.json(dados);
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    async create(req, res) {
        try {
            const dados = req.body;
            const resultado = await UsuarioModel.create(dados)
            return res.json(resultado);
        } catch(error) {
            return res.status(500).json(error);
        } 
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const dados = req.body;
            const resultado = await UsuarioModel.update(dados, { where: { id: id } });
            return res.json(resultado);
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const resultado = await UsuarioModel.destroy({ 
                where: {
                    id: id
                }
            })
            return res.json(resultado);
        } catch(error) {
            return res.status(500).json(error);
        }
    }
}

export default UsuarioController;