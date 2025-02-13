import UsuarioModel from "../models/UsuarioModel.js";
import { Op } from "sequelize";
import express from "express";

const UsuarioRoute = express.Router();

UsuarioRoute.get('/usuarios', async (req, res) => {
    try {
        const query = req.query;
        const dados = await UsuarioModel.findAll({
            where: {
                nome: {
                    [Op.like]: `%${query.nome}%`
                },
                email: {
                      [Op.like]: `%${query.email}%`
                }
            }
        });
        
        return res.json(dados);
    } catch(error) {
        return res.status(500).json(error);
    }
})

UsuarioRoute.get('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dados = await UsuarioModel.findByPk(id);
        return res.json(dados);
    } catch(error) {
        return res.status(500).json(error);
    }
})

UsuarioRoute.post('/usuarios', async (req, res) => {
    try {
        const dados = req.body;
        const resultado = await UsuarioModel.create(dados)
        return res.json(resultado);
    } catch(error) {
        return res.status(500).json(error);
    } 
})

UsuarioRoute.put('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dados = req.body;
        const resultado = await UsuarioModel.update(dados, { where: { id: id } });
        return res.json(resultado);
    } catch(error) {
        return res.status(500).json(error);
    }
})

UsuarioRoute.delete('/usuarios/:id', async (req, res) => {
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
})

export default UsuarioRoute;