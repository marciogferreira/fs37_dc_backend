import Helper from '../helpers/Helper.js';
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
            
            return res.status(200).json(dados);
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    async findByPK(req, res) {
        try {
            const id = req.params.id;
            const dados = await UsuarioModel.findByPk(id);
            if(dados) {
                return res.status(200).json({
                    message: "Usuario Encontrado.",
                    data: dados
                })
            } else {
                return res.status(404).json({
                    message: "Usuario Não Encontrado."
                })
            }
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    async create(req, res) {
        try {
            const dados = req.body;
            dados.senha = Helper.getTokenCrypto(dados.senha);
            const resultado = await UsuarioModel.create(dados)
            return res.status(201).json({
                message: "Usuario Criado com Sucesso.",
                data: resultado
            });
        } catch(error) {
            return res.status(500).json(error);
        } 
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const dados = req.body;
            const resultado = await UsuarioModel.update(dados, { where: { id: id } });
            return res.status(200).json({
                message: "Usuario Atualizado com Sucesso."
            });
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
            return res.status(204).json({
                message: "Usuario Deletado com Sucesso."
            });
        } catch(error) {
            return res.status(500).json(error);
        }
    }
}

export default UsuarioController;