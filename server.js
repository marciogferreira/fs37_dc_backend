import express from 'express';
import UsuarioRoute from './routes/UsuarioRoute.js';
import ClienteRoute from './routes/ClienteRoute.js';
import cors from 'cors'
import jwt from 'jsonwebtoken'
import PublicRoute from './routes/PublicRoute.js';
import 'dotenv/config'

const app = express();
app.use(express.json())
app.use(cors({
    origin: '*',
}))
app.get('/', (req, res) => {
    res.send('Servidor com Node, Express e Sequelize!');
})

app.use(PublicRoute)
// MIddleware localhost:3000/clientes?token=123456
app.use(function(req, res, next) {
    const token = req.headers.token;
    try {
        // Verifica se o Token é Válido
        jwt.verify(token, process.env.SECRET_KEY)
        next();
    } catch(e) {
        return res.status(403).json({
            message: 'Não Autorizado. ' + e.message
        })
    }
});
// Rotas Privadas
app.use(UsuarioRoute);
app.use(ClienteRoute);

const port = process.env.PORT || 4000; 

app.listen(port, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
})