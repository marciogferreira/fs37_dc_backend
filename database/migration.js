import Conexao from '../config/Conexao.js';

import UsuarioModel from '../models/UsuarioModel.js';
import ClienteModel from '../models/ClienteModel.js';
import Helper from '../helpers/Helper.js';

async function criarUsuario() {
    await UsuarioModel.create({
        nome: 'admin',
        email: 'admin@admin.com.br',
        senha: Helper.getTokenCrypto('123456'),
        status: 1
    })
}

criarUsuario()

Conexao.sync({ force: false });
// cd database
// node migration.js


