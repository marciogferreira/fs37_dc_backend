import Sequelize from 'sequelize';
import 'dotenv/config'

const Conexao = new Sequelize({
    dialect: 'postgres',
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

export default Conexao