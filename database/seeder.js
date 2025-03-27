import UsuarioModel from '../models/UsuarioModel.js';
import Helper from '../helpers/Helper.js';

async function seeder() {
    // await UsuarioModel.create({
    //     nome: 'admin',
    //     email: 'admin@admin.com.br',
    //     senha: Helper.getTokenCrypto('123456'),
    //     status: 1
    // })
    for(let i = 1; i <= 100; i++) {
        await UsuarioModel.create({
            nome: 'admin'+i,
            email: `admin${i}@admin.com.br`,
            senha: Helper.getTokenCrypto('123456'),
            status: 1
        })
    }
}

seeder()
