import express from 'express'
import UsuarioModel from '../models/UsuarioModel.js';
import jwt from 'jsonwebtoken'
import Helper from '../helpers/Helper.js';
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
        const hashToken = jwt.sign(dados, 'D.9X!l77[S^8rermZ^90afFt80Jr.$<qi]gDs7S2@&-ShomBUjn,CjYDF<,AUo}J3}9U>j2@!xU6Lz!j]HOsK[gXOnOes,>OZ8]6{@@ep;{+#Z1O,Z#x|Iq]S8?-BuLM')
        return res.json({
            message: "Login Efetuado com Sucesso",
            token: hashToken
        })
    } 
    
    return res.json({
        message: 'Login ou Senha incorreto'
    })
})

export default PublicRoute