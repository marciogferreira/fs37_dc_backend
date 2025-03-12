import express from 'express';
import UsuarioRoute from './routes/UsuarioRoute.js';
import ClienteRoute from './routes/ClienteRoute.js';
import cors from 'cors'

const app = express();
app.use(express.json())

app.use(cors({
    origin: '*',
}))

app.get('/', (req, res) => {
    res.send('Servidor com Node, Express e Sequelize!');
})

app.use(UsuarioRoute);
app.use(ClienteRoute);

app.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta http://localhost:3000');
})