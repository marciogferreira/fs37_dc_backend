import Sequelize from 'sequelize';
import 'dotenv/config'

const Conexao = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'hotel'
})

export default Conexao

// cd database
// node seeder.js
// npm start


