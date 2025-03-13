import express from 'express';
import UsuarioRoute from './routes/UsuarioRoute.js';
import ClienteRoute from './routes/ClienteRoute.js';
import cors from 'cors'
import jwt from 'jsonwebtoken'
import PublicRoute from './routes/PublicRoute.js';

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
        jwt.verify(token, 'D.9X!l77[S^8rermZ^90afFt80Jr.$<qi]gDs7S2@&-ShomBUjn,CjYDF<,AUo}J3}9U>j2@!xU6Lz!j]HOsK[gXOnOes,>OZ8]6{@@ep;{+#Z1O,Z#x|Iq]S8?-BuLM')
        next();
    } catch(e) {
        return res.json({
            message: 'Não Autorizado. ' + e.message
        })
    }
});
// Rotas Privadas
app.use(UsuarioRoute);
app.use(ClienteRoute);

app.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta http://localhost:3000');
})