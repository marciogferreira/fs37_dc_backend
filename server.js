import express from 'express';
import UsuarioModel from './models/UsuarioModel.js'

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor com Node, Express e Sequelize!');
})


app.get('/usuarios', async (req, res) => {
    const dados = await UsuarioModel.findAll();
    return res.json(dados);
})

app.post('/usuarios', async (req, res) => {
    try {
        const dados = req.body;
        const resultado = await UsuarioModel.create(dados)
        return res.json(resultado);
    } catch(error) {
        return res.status(500).json(error);
    }
   
})

app.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta http://localhost:3000');
})