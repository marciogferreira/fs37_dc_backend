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

export default PublicRoute