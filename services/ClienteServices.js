import ClienteModel from "../models/ClienteModel";

class ClienteServices {
    async criarValidarCliente(dados) {
        try {
            const { cpf } = dados
            if(cpf.length !== 11) {
                throw new Error('CPF Inválido. Digite um CPF Válido.');
            }
            const resposta = await ClienteModel.create(dados);
            return resposta;
        } catch(e) {
            throw new Error(e)
        }
    }
}

export default ClienteServices;