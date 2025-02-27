import ClienteModel from "../models/ClienteModel.js";

class ClienteServices {
    async criarValidarCliente(dados) {
        try {
            const { cpf } = dados
            let cpfLimpo = cpf.replaceAll('.', '').replaceAll('-', '')
           
            if(cpfLimpo.length !== 11) {
                throw new Error('CPF Inválido. Digite um CPF Válido.');
            }
            dados.cpf = cpfLimpo
            // Verifico se o Email j´s existe e Mostro a Mensagem 
            const resposta = await ClienteModel.create(dados);
            return resposta;

        } catch(e) {
        
            throw new Error(e)
        }
    }
}

export default ClienteServices;