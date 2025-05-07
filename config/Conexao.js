import Sequelize from 'sequelize';
import 'dotenv/config'

const Conexao = new Sequelize({
    dialect: process.env.DRIVER,
    host: process.env.HOST,
    port: process.env.PORTDB,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
})

export default Conexao

// cd database
// node seeder.js
// npm start
