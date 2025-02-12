import { DataTypes } from "sequelize";
import Conexao from "../config/Conexao.js";

const ClienteModel = Conexao.define(
    'ClienteModel',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'clientes'
    }
)

export default ClienteModel;