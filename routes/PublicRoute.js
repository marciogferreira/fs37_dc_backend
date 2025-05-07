import express from 'express'
import UsuarioModel from '../models/UsuarioModel.js';
import jwt from 'jsonwebtoken'
import Helper from '../helpers/Helper.js';
import 'dotenv/config'
const PublicRoute = express.Router()

PublicRoute.post('/login', async (req, res) => {
    const dados = req.body;
    const dadosUsuario = await UsuarioModel.findOne({
        where: {
            email: dados.email,
            senha: Helper.getTokenCrypto(dados.senha)
        }
    })
    if(dadosUsuario) {
        const dados = {
            nome: dadosUsuario.nome,
            email: dadosUsuario.email
        }
        const hashToken = jwt.sign(dados, process.env.SECRET_KEY)
        return res.json({
            message: "Login Efetuado com Sucesso",
            token: hashToken
        })
    } 
    
    return res.status(401).json({
        message: 'Login ou Senha incorreto'
    })
})

PublicRoute.post('/cadastrar-usuario', async(req, res) => {
    try {
        const dados = req.body;
        // Criptografando a senha
        dados.senha = Helper.getTokenCrypto(dados.senha)
        // Salvando Dados na Base de Dados
        const result = await UsuarioModel.create(dados);
        return res.status(200).json({
            message: 'Usuário criado com sucesso.',
            data: result
        })
    } catch(e) {
        return res.status(500).json({
            message: e.message
        })
    }
})

export default PublicRoute