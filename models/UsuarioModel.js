import { DataTypes } from "sequelize";
import Conexao from "../config/Conexao.js";

const UsuarioModel = Conexao.define(
    'UsuarioModel',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName: 'usuarios',
    }
)

export default UsuarioModel;