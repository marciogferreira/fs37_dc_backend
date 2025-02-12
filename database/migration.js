import Conexao from '../config/Conexao.js';

import UsuarioModel from '../models/UsuarioModel.js';
import ClienteModel from '../models/ClienteModel.js';

Conexao.sync({ force: false });
